const ROLES = {
    ADMIN: 'admin',
    STAFF: 'staff',
    FAMILY: 'family',
    RESIDENT: 'resident'
};

const DEMO_USERS = {
    'admin@bellavista.com': {
        password: 'demo123',
        role: ROLES.ADMIN,
        name: 'Main Admin'
    },
    'cardiff.admin@bellavista.com': {
        password: 'demo123',
        role: ROLES.ADMIN,
        name: 'Cardiff Admin',
        home: 'cardiff'
    },
    'barry.admin@bellavista.com': {
        password: 'demo123',
        role: ROLES.ADMIN,
        name: 'Barry Admin',
        home: 'barry'
    },
    'waverley.admin@bellavista.com': {
        password: 'demo123',
        role: ROLES.ADMIN,
        name: 'Waverley Admin',
        home: 'waverley'
    },
    'collegefields.admin@bellavista.com': {
        password: 'demo123',
        role: ROLES.ADMIN,
        name: 'College Fields Admin',
        home: 'college-fields'
    },
    'staff@bellavista.com': {
        password: 'demo123',
        role: ROLES.STAFF,
        name: 'Staff Member'
    },
    'family@bellavista.com': {
        password: 'demo123',
        role: ROLES.FAMILY,
        name: 'Family Member'
    },
    'resident@bellavista.com': {
        password: 'demo123',
        role: ROLES.RESIDENT,
        name: 'John Smith'
    }
};