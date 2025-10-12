// Tour Booking JavaScript
class TourBooking {
    constructor() {
        this.apiUrl = 'http://localhost:8000/api/tours/book/';
        this.init();
    }

    init() {
        // Add click handler to Book a Tour buttons
        document.addEventListener('DOMContentLoaded', () => {
            const bookButtons = document.querySelectorAll('.btn-primary[href*="schedule-tour"]');
            bookButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showBookingModal();
                });
            });
        });
    }

    showBookingModal() {
        const modal = this.createBookingModal();
        document.body.appendChild(modal);
        modal.style.display = 'flex';
    }

    createBookingModal() {
        const modal = document.createElement('div');
        modal.className = 'booking-modal-overlay';
        modal.innerHTML = `
            <div class="booking-modal">
                <div class="booking-modal-header">
                    <h3>Book a Tour</h3>
                    <button class="close-modal">&times;</button>
                </div>
                <form id="bookingForm" class="booking-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label>First Name *</label>
                            <input type="text" name="first_name" required>
                        </div>
                        <div class="form-group">
                            <label>Last Name *</label>
                            <input type="text" name="last_name" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Email *</label>
                            <input type="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label>Phone *</label>
                            <input type="tel" name="phone_number" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Preferred Home *</label>
                            <select name="preferred_home" required>
                                <option value="">Select a home</option>
                                <option value="cardiff">Cardiff Bay</option>
                                <option value="barry">Barry Seaside</option>
                                <option value="waverley">Waverley Centre</option>
                                <option value="college-fields">College Fields</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Care Type Interest</label>
                            <select name="care_type_interest">
                                <option value="general">General Inquiry</option>
                                <option value="residential">Residential Care</option>
                                <option value="nursing">Nursing Care</option>
                                <option value="dementia">Dementia Care</option>
                                <option value="respite">Respite Care</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Preferred Date *</label>
                            <input type="date" name="preferred_date" required>
                        </div>
                        <div class="form-group">
                            <label>Preferred Time *</label>
                            <select name="preferred_time" required>
                                <option value="">Select time</option>
                                <option value="09:00">9:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="14:00">2:00 PM</option>
                                <option value="15:00">3:00 PM</option>
                                <option value="16:00">4:00 PM</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label>Number of Visitors</label>
                            <input type="number" name="number_of_visitors" value="1" min="1" max="10">
                        </div>
                        <div class="form-group">
                            <label>Storage Method</label>
                            <select name="storage_method">
                                <option value="database">Database</option>
                                <option value="json">JSON File</option>
                                <option value="excel">Excel File</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Special Requirements</label>
                        <textarea name="special_requirements" rows="3" placeholder="Any special requirements or questions..."></textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="btn-cancel">Cancel</button>
                        <button type="submit" class="btn-submit">Book Tour</button>
                    </div>
                </form>
            </div>
        `;

        // Add event listeners
        modal.querySelector('.close-modal').onclick = () => this.closeModal(modal);
        modal.querySelector('.btn-cancel').onclick = () => this.closeModal(modal);
        modal.querySelector('#bookingForm').onsubmit = (e) => this.handleSubmit(e, modal);
        modal.onclick = (e) => {
            if (e.target === modal) this.closeModal(modal);
        };

        // Set minimum date to today
        const dateInput = modal.querySelector('input[name="preferred_date"]');
        dateInput.min = new Date().toISOString().split('T')[0];

        return modal;
    }

    async handleSubmit(e, modal) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.textContent = 'Booking...';
        submitBtn.disabled = true;

        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                this.showSuccess(result, modal);
            } else {
                this.showError(result.message || 'Booking failed', result.errors);
            }
        } catch (error) {
            this.showError('Network error. Please try again.');
        } finally {
            submitBtn.textContent = 'Book Tour';
            submitBtn.disabled = false;
        }
    }

    showSuccess(result, modal) {
        modal.innerHTML = `
            <div class="booking-modal">
                <div class="success-message">
                    <i class="fas fa-check-circle"></i>
                    <h3>Booking Successful!</h3>
                    <p>${result.message}</p>
                    <p><strong>Booking ID:</strong> ${result.booking_id}</p>
                    <p><strong>Storage:</strong> ${result.storage}</p>
                    <button class="btn-close" onclick="this.closest('.booking-modal-overlay').remove()">Close</button>
                </div>
            </div>
        `;
    }

    showError(message, errors = null) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
            ${errors ? `<pre>${JSON.stringify(errors, null, 2)}</pre>` : ''}
        `;
        
        // Remove existing error messages
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        
        // Add new error message
        document.querySelector('.booking-form').prepend(errorDiv);
        
        setTimeout(() => errorDiv.remove(), 5000);
    }

    closeModal(modal) {
        modal.remove();
    }
}

// Initialize booking system
new TourBooking();