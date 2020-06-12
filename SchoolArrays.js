const subjects = Object.freeze({
    math: "math",
    science: "science",
    english: "english"
});

const timeslots = Object.freeze({
    morning: "morning",
    afternoon: "afternoon",
});

let students = [
    {
        id: "27349f20-8fa2-4d6d-b8ef-faa9630494e6",
        firstName: "Ida",
        lastName: "Kemp"
    }, {
        id: "ae025246-b36b-46cb-9de7-d52e46b4a6f7",
        firstName: "Aiysha",
        lastName: "Carlson"
    }, {
        id: "f332c68b-f0ce-4e7a-9c27-2d51a92e94d0",
        firstName: "Jameson",
        lastName: "Cabrera"
    }, {
        id: "46d4e75f-6e00-4343-a1bb-9e9339ec7e39",
        firstName: "Vicky",
        lastName: "Walker"
    }, {
        id: "c04407a1-9be9-46a6-960c-c462b994122d",
        firstName: "Janelle",
        lastName: "Charles"
    }, {
        id: "da8c8e15-117f-42a2-af9d-361e664d4773",
        firstName: "Catherine",
        lastName: "Lowe"
    }, {
        id: "5e2ca1b5-fd09-4640-8c3b-63026336c3aa",
        firstName: "Arham",
        lastName: "Harwood"
    }, {
        id: "aef2d930-ef76-4525-92b0-9199cebbcb43",
        firstName: "Kerry",
        lastName: "Lucas"
    }, {
        id: "2d1158ef-a61e-44d3-9f8d-13a3004f5ecc",
        firstName: "Daniaal",
        lastName: "Holloway"
    }, {
        id: "68424d92-75b0-41e7-971d-caedb762a66e",
        firstName: "Faith",
        lastName: "Howe"
    }
];

let teachers = [
    {
        id: "948c3641-f95d-483b-8c59-b84c27041313",
        title: "Mr",
        firstName: "Franky",
        lastName: "Calvert",
        subject: subjects.math
    }, {
        id: "6ee455cc-ed20-47f7-91b7-f89b08e9dae1",
        title: "Mrs",
        firstName: "Raheel",
        lastName: "Mejia",
        subject: subjects.english
    }, {
        id: "dd798187-7880-4294-aa51-cc9ed0bc7779",
        title: "Miss",
        firstName: "Amiya",
        lastName: "Conley",
        subject: subjects.science
    }, {
        id: "34bbfa11-2afd-43a2-8e80-5d7ae853b153",
        title: "Mr",
        firstName: "Owen",
        lastName: "Stewart",
        subject: subjects.english
    }
];

let classes = [
    {
        id: "55e63d2d-0ed6-44c5-b161-e95fdd76a2d5",
        teacherId: "948c3641-f95d-483b-8c59-b84c27041313",
        timeslot: timeslots.morning
    }, {
        id: "710a36ce-f6ea-4f23-9d8d-09f55ea9f503",
        teacherId: "948c3641-f95d-483b-8c59-b84c27041313",
        timeslot: timeslots.afternoon
    }, {
        id: "3fc0fb62-fd0a-4fd8-9be8-4ee61f622265",
        teacherId: "6ee455cc-ed20-47f7-91b7-f89b08e9dae1",
        timeslot: timeslots.morning
    }, {
        id: "abe6da2b-6597-4083-8ea2-9fe8aed0471b",
        teacherId: "34bbfa11-2afd-43a2-8e80-5d7ae853b153",
        timeslot: timeslots.afternoon
    }, {
        id: "0e78c68a-c0b6-4c19-99a3-8ef342b93ad5",
        teacherId: "dd798187-7880-4294-aa51-cc9ed0bc7779",
        timeslot: timeslots.morning
    }, {
        id: "d95e1f30-2160-4ab2-87a2-138b315bf680",
        teacherId: "dd798187-7880-4294-aa51-cc9ed0bc7779",
        timeslot: timeslots.afternoon
    }
];

let studentClasses = [
    {
        studentId: "27349f20-8fa2-4d6d-b8ef-faa9630494e6",
        classId: "55e63d2d-0ed6-44c5-b161-e95fdd76a2d5"
    }, {
        studentId: "ae025246-b36b-46cb-9de7-d52e46b4a6f7",
        classId: "55e63d2d-0ed6-44c5-b161-e95fdd76a2d5"
    }, {
        studentId: "f332c68b-f0ce-4e7a-9c27-2d51a92e94d0",
        classId: "55e63d2d-0ed6-44c5-b161-e95fdd76a2d5"
    }, {
        studentId: "46d4e75f-6e00-4343-a1bb-9e9339ec7e39",
        classId: "0e78c68a-c0b6-4c19-99a3-8ef342b93ad5"
    }, {
        studentId: "c04407a1-9be9-46a6-960c-c462b994122d",
        classId: "3fc0fb62-fd0a-4fd8-9be8-4ee61f622265"
    }, {
        studentId: "da8c8e15-117f-42a2-af9d-361e664d4773",
        classId: "3fc0fb62-fd0a-4fd8-9be8-4ee61f622265"
    }, {
        studentId: "5e2ca1b5-fd09-4640-8c3b-63026336c3aa",
        classId: "3fc0fb62-fd0a-4fd8-9be8-4ee61f622265"
    }, {
        studentId: "aef2d930-ef76-4525-92b0-9199cebbcb43",
        classId: "0e78c68a-c0b6-4c19-99a3-8ef342b93ad5"
    }, {
        studentId: "27349f20-8fa2-4d6d-b8ef-faa9630494e6",
        classId: "710a36ce-f6ea-4f23-9d8d-09f55ea9f503"
    }, {
        studentId: "ae025246-b36b-46cb-9de7-d52e46b4a6f7",
        classId: "710a36ce-f6ea-4f23-9d8d-09f55ea9f503"
    }, {
        studentId: "f332c68b-f0ce-4e7a-9c27-2d51a92e94d0",
        classId: "710a36ce-f6ea-4f23-9d8d-09f55ea9f503"
    }, {
        studentId: "46d4e75f-6e00-4343-a1bb-9e9339ec7e39",
        classId: "abe6da2b-6597-4083-8ea2-9fe8aed0471b"
    }, {
        studentId: "c04407a1-9be9-46a6-960c-c462b994122d",
        classId: "abe6da2b-6597-4083-8ea2-9fe8aed0471b"
    }, {
        studentId: "da8c8e15-117f-42a2-af9d-361e664d4773",
        classId: "abe6da2b-6597-4083-8ea2-9fe8aed0471b"
    }, {
        studentId: "5e2ca1b5-fd09-4640-8c3b-63026336c3aa",
        classId: "dd798187-7880-4294-aa51-cc9ed0bc7779"
    }, {
        studentId: "aef2d930-ef76-4525-92b0-9199cebbcb43",
        classId: "d95e1f30-2160-4ab2-87a2-138b315bf680"
    }, {
        studentId: "2d1158ef-a61e-44d3-9f8d-13a3004f5ecc",
        classId: "d95e1f30-2160-4ab2-87a2-138b315bf680"
    }, {
        studentId: "68424d92-75b0-41e7-971d-caedb762a66e",
        classId: "d95e1f30-2160-4ab2-87a2-138b315bf680"
    },
];

// Q1
function getStudentById(id) {
    return students.find(student => student.id == id);
}

// Q2
function getTeacherById(id) {
    return teachers.find(teacher => teacher.id == id);
}

// Q3
function getClassById(id) {
    return classes.find(cls => cls.id == id); // Don't use class
}

// Q4
function getTeacherByClassId(classId) {
    let cls = getClassById(classId);
    return getTeacherById(cls.teacherId);
}

// Q5
function getStudentsInClass(classId) {
    let studClses = studentClasses.filter(sc => sc.classId == classId);
    let studentIds = studClses.map(sc => sc.studentId);
    return studentIds.map(id => getStudentById(id));
}

// console.log(getStudentsInClass("3fc0fb62-fd0a-4fd8-9be8-4ee61f622265"));

// Q6
function getSubjectsForStudent(studentId) {
    let studClses = studentClasses.filter(sc => sc.studentId == studentId);
    let classIds = studClses.map(sc => sc.classId);
    let teachers = classIds.map(classId => getTeacherByClassId(classId));
    return teachers.map(teacher => teacher.subject);
}

// console.log(getSubjectsForStudent("46d4e75f-6e00-4343-a1bb-9e9339ec7e39"));

// Q7
function getTeacherSchedule(teacherId) {
    let morningClass = classes.find(cls => cls.teacherId == teacherId && cls.timeslot == timeslots.morning);
    let afternoonClass = classes.find(cls => cls.teacherId == teacherId && cls.timeslot == timeslots.afternoon);
    let schedule = {};
    if (morningClass) {
        let studentsInClass = studentClasses.filter(sc => sc.classId == morningClass.id);
        let studentIds = studentsInClass.map(sc => sc.studentId);
        schedule.morningClass = studentIds.map(id => getStudentById(id));
    }
    if (afternoonClass) {
        let studentsInClass = studentClasses.filter(sc => sc.classId == afternoonClass.id);
        let studentIds = studentsInClass.map(sc => sc.studentId);
        schedule.afternoonClass = studentIds.map(id => getStudentById(id));
    }
    return schedule;
}

// console.log(getTeacherSchedule("948c3641-f95d-483b-8c59-b84c27041313"));


// Q8
function getStudentSchedule(studentId) {
    let studClses = studentClasses.filter(sc => sc.studentId == studentId);
    let classIds = studClses.map(sc => sc.classId);
    let clses = classIds.map(id => getClassById(id));
    let schedule = {};
    let morningClass = clses.find(cls => cls.timeslot == timeslots.morning);
    let afternoonClass = clses.find(cls => cls.timeslot == timeslots.afternoon);

    if (morningClass) {
        let teacher = getTeacherById(morningClass.teacherId);
        schedule.morningTimeslot = {
            teacherName: `${teacher.title} ${teacher.firstName} ${teacher.lastName}`,
            subject: teacher.subject
        };
    }

    if (afternoonClass) {
        let teacher = getTeacherById(afternoonClass.teacherId);
        schedule.afternoonTimeslot = {
            teacherName: `${teacher.title} ${teacher.firstName} ${teacher.lastName}`,
            subject: teacher.subject
        };
    }


    return schedule;
}

// console.log(getStudentSchedule("c04407a1-9be9-46a6-960c-c462b994122d"))

// Q9
function doesTeach(teacherId, studentId) {
    let studClses = studentClasses.filter(sc => sc.studentId == studentId);
    let studClsIds = studClses.map(sc => sc.classId);
    

    let teachClses = classes.filter(cls => cls.teacherId == teacherId);
    let teachClsIds = teachClses.map(cls => cls.id);

    return studClsIds.some(studClsId => teachClsIds.includes(studClsId));
}

console.log(doesTeach("948c3641-f95d-483b-8c59-b84c27041313", "ae025246-b36b-46cb-9de7-d52e46b4a6f7"));
