# API Testing Tasks for Bellavista Backend

## Overview
Complete API testing for the Django REST API hosted on Railway (https://bellavista-backend-production.up.railway.app/api/tours/). Test all endpoints systematically using curl commands.

## Endpoints to Test
1. **test/** - Test connection endpoint
   - Method: GET
   - Expected: JSON with status, message, total_bookings

2. **available-slots/** - Get available time slots
   - Method: GET
   - Query params: date (YYYY-MM-DD), home (e.g., 'cardiff', 'barry', 'college_fields', 'waverley')
   - Expected: JSON with available_slots array, date, home

3. **stats/** - Booking statistics
   - Method: GET
   - Expected: JSON with total_bookings, confirmed_bookings, pending_bookings, homes_stats

4. **find-nearest-home/** - Find nearest home
   - Method: GET
   - Query params: location (string) or lat/lon (floats)
   - Expected: JSON with nearest home details, distance, duration, maps_url

5. **book/** - Tour booking
   - Method: GET (schema)
     - Expected: JSON with message, methods, required_fields
   - Method: POST (create booking)
     - Body: JSON with first_name, last_name, email, phone_number, preferred_home, preferred_date, preferred_time, notes (optional)
     - Expected: JSON with success, message, booking_id, email_sent

6. **bookings/** - List bookings
   - Method: GET
   - Expected: JSON array of bookings

7. **bookings/<booking_id>/status/** - Update booking status
   - Method: PATCH
   - Body: JSON with status ('visited', 'not_visited', 'pending')
   - Expected: JSON with success, message, booking_id, new_status
   - Note: Requires booking_id from previous POST to book/

8. **export/** - Export bookings to Excel
   - Method: GET
   - Query params: status (optional, 'all', 'visited', 'not_visited', 'pending')
   - Expected: Excel file download

## Testing Steps
- [x] Test test/ endpoint for connectivity - SUCCESS: Status 200, Response: {"status":"connected","message":"Backend is working!","total_bookings":0}
- [x] Test available-slots/ with sample date and home - SUCCESS: Status 200, Response: {"available_slots":["09:00","10:00","11:00","14:00","15:00","16:00"],"date":"2024-12-01","home":"cardiff"}
- [x] Test stats/ for booking statistics - ERROR: Status 500, Server Error
- [x] Test find-nearest-home/ with location string - ERROR: Status 404, Not Found
- [x] Test find-nearest-home/ with lat/lon coordinates - ERROR: Status 404, Not Found
- [x] Test book/ GET for schema - SUCCESS: Status 200, Response: {"message":"Tour booking endpoint ready","methods":["POST"],"required_fields":["first_name","last_name","email","phone_number","preferred_home","preferred_date","preferred_time"]}
- [x] Test book/ POST to create a new booking (capture booking_id) - SUCCESS: Status 201, Response: {"success":true,"message":"Tour booking submitted successfully!","booking_id":1,"email_sent":false}
- [x] Test bookings/ GET to list all bookings - SUCCESS: Status 200, Response: Array with booking details (truncated)
- [x] Test bookings/<booking_id>/status/ PATCH to update status using captured booking_id - SUCCESS: Status 200, Response: {"success":true,"message":"Status updated to visited","booking_id":1,"new_status":"visited"}
- [x] Test export/ GET for Excel export - SUCCESS: File downloaded as tour_bookings.xlsx
- [x] Document all results, including status codes, responses, and any errors

## Summary of API Testing Results

### Successful Endpoints (7/9):
1. **test/** - ✅ Status 200: Backend connectivity confirmed
2. **available-slots/** - ✅ Status 200: Returns available time slots correctly
3. **book/ GET** - ✅ Status 200: Schema endpoint working
4. **book/ POST** - ✅ Status 201: Booking creation successful (booking_id: 1)
5. **bookings/** - ✅ Status 200: List bookings working
6. **bookings/<id>/status/** - ✅ Status 200: Status update successful
7. **export/** - ✅ Status 200: Excel file downloaded successfully

### Failed Endpoints (2/9):
1. **stats/** - ❌ Status 500: Server error (likely missing model field or database issue)
2. **find-nearest-home/** - ❌ Status 404: Endpoint not found (possibly missing URL configuration or constants issue)

### Notes:
- All core booking functionality is working correctly
- Email sending is disabled (email_sent: false) - likely due to missing email configuration
- Date validation prevents past dates (as expected)
- Status updates work for 'visited', 'not_visited', 'pending'
- Export functionality requires pandas and openpyxl (working in production)
- find-nearest-home endpoint may need debugging for HOME_LOCATIONS constants
- stats endpoint needs investigation for the 500 error

## Notes
- Base URL: https://bellavista-backend-production.up.railway.app/api/tours/
- Use curl with -H "Content-Type: application/json" for POST/PATCH
- Capture booking_id from POST response for status update
- Verify JSON responses match expected structure
- Check for proper error handling (400, 404, 500)
