export class ServerState {
    users = [
        {
            id: 0,
            firstName: "User",
            secondName: "1",
            email: "user1@example.com",
            password: "Qwerty1$3",
            points: 10,
            gtaProgress: 0,
            aProgress: 0,
            wpProgress: 0,
            image: "/public/animals/капибара.jpg"
        },
        {
            id: 1,
            firstName: "User",
            secondName: "2",
            email: "user2@example.com",
            password: "Qwerty1$3",
            points: 11,
            gtaProgress: 0,
            aProgress: 0,
            wpProgress: 0,
            image: "/public/animals/капибара.jpg"
        },
        {
            id: 2,
            firstName: "SuperUser",
            secondName: "3",
            email: "user3@example.com",
            password: "Qwerty1$3",
            points: 12,
            gtaProgress: 0,
            aProgress: 0,
            wpProgress: 0,
            image: "/public/animals/капибара.jpg"
        },
        {
            id: 3,
            firstName: "MegaUser",
            secondName: "4",
            email: "user4@example.com",
            password: "Qwerty1$3",
            points: 8,
            gtaProgress: 0,
            aProgress: 0,
            wpProgress: 0,
            image: "/public/animals/капибара.jpg"
        },
    ]
    guessTheAnimal = [
        "/public/animals/ежик.jpg",
        "/public/animals/жираф.jpg",
        "/public/animals/капибара.jpg",
        "/public/animals/леопард.jpg",
        "/public/animals/панда.jpg",
        "/public/animals/попугай.jpg",
    ]
    wordPractice = [
        {
            question: {
                word: "gardener",
                transcription: "['ɡɑːrdənər]",
                translation: "Cадовник"
            },
            answers: [
                {
                    word: "dog",
                    transcription: "[dɒɡ]",
                    translation: "Собака"
                },
                {
                    word: "gladiolus",
                    transcription: "[ɡlædɪ'əʊləs]",
                    translation: "Гладиолус"
                },
                {
                    word: "gardener",
                    transcription: "['ɡɑːrdənər]",
                    translation: "Cадовник"
                },
                {
                    word: "fly",
                    transcription: "[flaɪ]",
                    translation: "Муха"
                },
            ]
        },
        {
            question: {
                word: "dog",
                transcription: "[dɒɡ]",
                translation: "Собака"
            },
            answers: [
                {
                    word: "cucumber",
                    transcription: "['kjuː kʌmbɚ]",
                    translation: "Огурец"
                },
                {
                    word: "dog",
                    transcription: "[dɒɡ]",
                    translation: "Собака"
                },
                {
                    word: "master",
                    transcription: "['mæstər]",
                    translation: "Мастер"
                },
                {
                    word: "fly",
                    transcription: "[flaɪ]",
                    translation: "Муха"
                },
            ]
        },
        {
            question: {
                word: "cucumber",
                transcription: "['kjuː kʌmbɚ]",
                translation: "Огурец"
            },
            answers: [
                {
                    word: "gardener",
                    transcription: "['ɡɑːrdənər]",
                    translation: "Cадовник"
                },
                {
                    word: "cucumber",
                    transcription: "['kjuː kʌmbɚ]",
                    translation: "Огурец"
                },
                {
                    word: "master",
                    transcription: "['mæstər]",
                    translation: "Мастер"
                },
                {
                    word: "fly",
                    transcription: "[flaɪ]",
                    translation: "Муха"
                },
            ]
        },
    ]
    audition = [
        {
            word: "master",
            transcription: "['mæstər]",
            translation: "Мастер"
        },
        {
            word: "gardener",
            transcription: "['ɡɑːrdənər]",
            translation: "Cадовник"
        },
        {
            word: "cucumber",
            transcription: "['kjuː kʌmbɚ]",
            translation: "Огурец"
        },
        {
            word: "fly",
            transcription: "[flaɪ]",
            translation: "Муха"
        },
    ]
    documentation = ""
}
