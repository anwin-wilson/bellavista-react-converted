const DemoData = {
    residents: [
        {
            id: '001',
            name: 'John Smith',
            room: '101',
            careLevel: 'High',
            medications: [
                {
                    name: 'Aspirin',
                    dosage: '81mg',
                    frequency: 'Daily',
                    time: '08:00'
                }
            ],
            activities: [
                {
                    name: 'Morning Walk',
                    time: '09:00',
                    location: 'Garden'
                }
            ]
        }
    ],
    
    staff: [
        {
            id: 'S001',
            name: 'Sarah Jones',
            role: 'Nurse',
            shift: 'Morning'
        }
    ],

    schedules: {
        activities: [
            {
                name: 'Morning Exercise',
                time: '10:00',
                location: 'Activity Room',
                capacity: 15
            }
        ],
        meals: [
            {
                name: 'Breakfast',
                time: '08:00',
                menu: 'Continental/English'
            }
        ]
    }
};