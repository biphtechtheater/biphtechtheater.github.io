const records = [
    {
        student: "Jocelyn",
        date: "2026-08-21",
        time: "11:00 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-08-21",
        time: "11:01 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-08-21",
        time: "11:01 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-08-21",
        time: "11:07 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-08-21",
        time: "11:02 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-08-21",
        time: "11:10 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-08-26",
        time: "12:14 PM",
        percentage: 33,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-08-26",
        time: "12:23 PM",
        percentage: 83,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-08-26",
        time: "12:23 PM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-08-26",
        time: "12:23 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-08-26",
        time: "12:23 PM",
        percentage: 67,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-08-27",
        time: "2:07 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-08-27",
        time: "2:07 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-08-27",
        time: "2:07 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-08-27",
        time: "2:07 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-08-24",
        time: "2:28 PM",
        percentage: 98,
        exercise: "Sight Singing",
        termsToReview: ["pitch consistency","evenness"]
    },
    {
        student: "Teresa",
        date: "2026-08-24",
        time: "2:28 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-08-24",
        time: "2:32 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-08-24",
        time: "2:41 PM",
        percentage: 98,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-08-27",
        time: "2:55 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-08-27",
        time: "2:57 PM",
        percentage: 43,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-08-27",
        time: "2:58 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-08-27",
        time: "3:01 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-08-27",
        time: "3:02 PM",
        percentage: 71,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-08-27",
        time: "3:03 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-08-27",
        time: "7:36 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-08-27",
        time: "7:36 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-08-28",
        time: "11:16 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-08-28",
        time: "11:16 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-08-28",
        time: "11:16 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-08-28",
        time: "11:16 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-08-28",
        time: "11:15 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-08-28",
        time: "11:15 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-08-28",
        time: "11:15 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-08-28",
        time: "2:58 PM",
        percentage: 98,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-08-28",
        time: "3:05 PM",
        percentage: 96,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-08-28",
        time: "3:06 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-01",
        time: "2:23 PM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-01",
        time: "2:23 PM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-01",
        time: "10:58 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-01",
        time: "10:58 am",
        percentage: 80,
        exercise: "Vocab",
        termsToReview: ["Key","Key Signature"]
    },
    {
        student: "Jocelyn",
        date: "2026-09-01",
        time: "10:57 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-01",
        time: "10:56 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-01",
        time: "10:57 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-01",
        time: "2:33 PM",
        percentage: 93,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-01",
        time: "2:35 PM",
        percentage: 93,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-01",
        time: "2:37 PM",
        percentage: 64,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-01",
        time: "2:40 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-01",
        time: "2:48 PM",
        percentage: 64,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-01",
        time: "2:51 PM",
        percentage: 75,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-01",
        time: "2:55 PM",
        percentage: 90,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-08-31",
        time: "9:43 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-08-31",
        time: "9:43 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-08-31",
        time: "9:43 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-08-31",
        time: "9:43 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-08-31",
        time: "9:44 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-08-31",
        time: "9:45 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-01",
        time: "9:47 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-01",
        time: "9:47 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-01",
        time: "9:47 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-01",
        time: "9:48 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-01",
        time: "9:48 PM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-01",
        time: "9:48 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-01",
        time: "9:48 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-02",
        time: "11:06 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-02",
        time: "11:06 AM",
        percentage: 80,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-02",
        time: "11:06 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-02",
        time: "11:06 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-02",
        time: "11:47 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-02",
        time: "11:47 AM",
        percentage: 90,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-02",
        time: "11:48 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-02",
        time: "11:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-02",
        time: "11:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-02",
        time: "11:10 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-02",
        time: "11:10 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-02",
        time: "11:04 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-02",
        time: "12:03 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-02",
        time: "12:03 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-02",
        time: "12:03 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-02",
        time: "12:03 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-02",
        time: "12:03 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-02",
        time: "12:03 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-02",
        time: "12:03 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-08-28",
        time: "9:42 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-08-28",
        time: "9:43 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-08-28",
        time: "9:48 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-08-28",
        time: "9:52 PM",
        percentage: 89,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-08-31",
        time: "10:12 PM",
        percentage: 44,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-08-31",
        time: "10:15 PM",
        percentage: 78,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-08-31",
        time: "10:18 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-08-31",
        time: "10:19 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-08-31",
        time: "10:20 PM",
        percentage: 89,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-08-31",
        time: "10:22 PM",
        percentage: 89,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-08-31",
        time: "10:23 PM",
        percentage: 56,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-03",
        time: "10:33 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-03",
        time: "10:34 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-03",
        time: "10:34 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-03",
        time: "10:34 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-03",
        time: "10:34 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-03",
        time: "10:34 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-04",
        time: "10:34 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-04",
        time: "10:35 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-04",
        time: "10:35 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-04",
        time: "10:35 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-04",
        time: "10:35 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-04",
        time: "10:35 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-07",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-07",
        time: "上午10:52",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-07",
        time: "10:54 AM",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-07",
        time: "10:55 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-07",
        time: "上午10:55",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-07",
        time: "10:56 AM",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-07",
        time: "上午10:56",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-07",
        time: "10:56 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-07",
        time: "上午10:57",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-07",
        time: "10:58 am",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-07",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-07",
        time: "9:54 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-07",
        time: "9:54 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-07",
        time: "9:54 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-07",
        time: "9:54 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-07",
        time: "9:55 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-07",
        time: "9:55 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-08",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-08",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-08",
        time: "10:51 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-08",
        time: "上午10:51",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-08",
        time: "上午10:50",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-08",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-08",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-08",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-08",
        time: "10:52 AM",
        percentage: 90,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: ["Minor 2nd"]
    },
    {
        student: "Teresa",
        date: "2026-09-08",
        time: "上午10:52",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-08",
        time: "上午10:52",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-08",
        time: "10:53 am",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-08",
        time: "11:05 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-08",
        time: "10:56 AM",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-07",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-08",
        time: "2:27 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-08",
        time: "2:27 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-09",
        time: "10:40 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-09",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-09",
        time: "10:49 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-09",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-09",
        time: "10:51 am",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-09",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-09",
        time: "上午10:51",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-09",
        time: "上午10:53",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-09",
        time: "上午10:54",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-09",
        time: "10:54 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-09",
        time: "上午10:55",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-09",
        time: "10:56 AM",
        percentage: 100,
        exercise: "Ear Training – Intervals (Major & Minor 2nds)",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-08",
        time: "2:20 PM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-08",
        time: "2:20 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-08",
        time: "2:20 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-08",
        time: "2:20 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-08",
        time: "2:20 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-07",
        time: "2:23 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-03",
        time: "2:23 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-09",
        time: "2:21 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-09",
        time: "2:21 PM",
        percentage: 75,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-09",
        time: "8:16 PM",
        percentage: 75,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-09",
        time: "8:16 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-09",
        time: "8:16 PM",
        percentage: 75,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-09",
        time: "8:17 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-10",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-10",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-10",
        time: "上午10:14",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-10",
        time: "10:18 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-10",
        time: "10:21 am",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-10",
        time: "10:53 AM",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-10",
        time: "10:57 AM",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-10",
        time: "10:35 AM",
        percentage: 90,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Tritone"]
    },
    {
        student: "Thomas",
        date: "2026-09-10",
        time: "10:58 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-10",
        time: "10:18 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-10",
        time: "上午10:54",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-10",
        time: "11:01 AM",
        percentage: 60,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Tritone","Minor 6th","Major 6th"]
    },
    {
        student: "Alex",
        date: "2026-09-09",
        time: "11:04 PM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-11",
        time: "上午10:36",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-11",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-11",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-11",
        time: "10:47 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-11",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-11",
        time: "10:55 am",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-11",
        time: "10:54 AM",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-11",
        time: "上午10:59",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-11",
        time: "10:57 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-11",
        time: "11:02 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-11",
        time: "11:06 AM",
        percentage: 70,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Minor 3rd","Major 6th","Minor 6th"]
    },
    {
        student: "Alex",
        date: "2026-09-07",
        time: "12:46 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-08",
        time: "12:46 PM",
        percentage: 94,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-09",
        time: "12:46 PM",
        percentage: 93,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-10",
        time: "12:46 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-07",
        time: "12:56 PM",
        percentage: 88,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-08",
        time: "12:56 PM",
        percentage: 89,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-09",
        time: "12:57 PM",
        percentage: 79,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-10",
        time: "12:57 PM",
        percentage: 79,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-07",
        time: "1:09 PM",
        percentage: 81,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-08",
        time: "1:09 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-09",
        time: "1:10 PM",
        percentage: 64,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-10",
        time: "1:10 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-07",
        time: "1:20 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-08",
        time: "1:20 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-09",
        time: "1:20 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-10",
        time: "1:21 PM",
        percentage: 92,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-07",
        time: "1:30 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-08",
        time: "1:30 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-09",
        time: "1:30 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-07",
        time: "1:58 PM",
        percentage: 81,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-08",
        time: "1:58 PM",
        percentage: 83,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-09",
        time: "1:59 PM",
        percentage: 93,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-10",
        time: "1:59 PM",
        percentage: 67,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-08",
        time: "2:03 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-10",
        time: "2:03 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-10",
        time: "2:11 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-10",
        time: "2:11 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-10",
        time: "2:11 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-10",
        time: "2:11 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-10",
        time: "2:11 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-11",
        time: "2:12 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-11",
        time: "9:09 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-11",
        time: "9:11 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-10",
        time: "9:13 PM",
        percentage: 25,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-10",
        time: "10:49 PM",
        percentage: 25,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-11",
        time: "10:50 PM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-14",
        time: "10:45 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-14",
        time: "10:49 am",
        percentage: 90,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Q4"]
    },
    {
        student: "Calvin",
        date: "2026-09-14",
        time: "上午10:48",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-14",
        time: "上午10:56",
        percentage: 80,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Q1","Q7"]
    },
    {
        student: "Jocelyn",
        date: "2026-09-14",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-14",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-14",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-14",
        time: "10:47 AM",
        percentage: 90,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Q5"]
    },
    {
        student: "Teresa",
        date: "2026-09-14",
        time: "上午10:50",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-14",
        time: "上午10:49",
        percentage: 90,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Q3"]
    },
    {
        student: "Thomas",
        date: "2026-09-14",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-14",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-14",
        time: "10:48 AM",
        percentage: 80,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Q7","Q10"]
    },
    {
        student: "Maggie",
        date: "2026-09-15",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-15",
        time: "10:46 AM",
        percentage: 80,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Minor 6th","Major 6th"]
    },
    {
        student: "Teresa",
        date: "2026-09-15",
        time: "上午10:48",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-15",
        time: "上午10:51",
        percentage: 70,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Minor 7th","Perfect 5th"]
    },
    {
        student: "Alex",
        date: "2026-09-15",
        time: "10:51 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-15",
        time: "10:51 am",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-15",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-15",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Ear Training – All Intervals",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-15",
        time: "上午10:46",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-15",
        time: "上午10:57",
        percentage: 80,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Major 6th","Minor 7th"]
    },
    {
        student: "Thomas",
        date: "2026-09-15",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-15",
        time: "10:50 AM",
        percentage: 40,
        exercise: "Ear Training – All Intervals",
        termsToReview: ["Minor 7th","Minor 3rd","Minor 6th","Perfect 4th","Major 7th"]
    },
    {
        student: "Maggie",
        date: "2026-09-15",
        time: "11:37 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-15",
        time: "11:38 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-15",
        time: "11:38 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-15",
        time: "11:38 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-15",
        time: "11:38 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-15",
        time: "11:38 AM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-15",
        time: "11:39 AM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-18",
        time: "10:51 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-18",
        time: "10:50 am",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-18",
        time: "上午10:47",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-18",
        time: "上午10:54",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-18",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-18",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-18",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-18",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-18",
        time: "上午10:51",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-18",
        time: "上午10:50",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-18",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-18",
        time: "10:50 AM",
        percentage: 70,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th","Major 7th","Minor 6th"]
    },
    {
        student: "William",
        date: "2026-09-18",
        time: "10:56 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-18",
        time: "10:59 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Major 6th","Major 2nd"]
    },
    {
        student: "Thomas",
        date: "2026-09-21",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-21",
        time: "10:48 AM",
        percentage: 70,
        exercise: "Ear Training",
        termsToReview: ["Minor 6th","Perfect 8ve"]
    },
    {
        student: "Maggie",
        date: "2026-09-21",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-21",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-21",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-21",
        time: "10:48 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd","Major 6th"]
    },
    {
        student: "Jocelyn",
        date: "2026-09-21",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-21",
        time: "10:51 AM",
        percentage: 90,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th"]
    },
    {
        student: "Alex",
        date: "2026-09-21",
        time: "10:53 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-21",
        time: "10:48 am",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-22",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-22",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-22",
        time: "10:43 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-22",
        time: "10:46 AM",
        percentage: 90,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd"]
    },
    {
        student: "Thomas",
        date: "2026-09-22",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-22",
        time: "10:47 AM",
        percentage: 50,
        exercise: "Ear Training",
        termsToReview: ["Perfect 8ve","Tritone","Minor 6th"]
    },
    {
        student: "William",
        date: "2026-09-22",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-22",
        time: "10:50 AM",
        percentage: 60,
        exercise: "Ear Training",
        termsToReview: ["Perfect 4th","Major 3rd","Major 2nd","Minor 6th"]
    },
    {
        student: "Alex",
        date: "2026-09-22",
        time: "10:51 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-22",
        time: "10:51 am",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-17",
        time: "8:29 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-17",
        time: "8:29 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-17",
        time: "8:29 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-17",
        time: "8:29 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-17",
        time: "8:29 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-17",
        time: "8:29 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-17",
        time: "8:30 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-18",
        time: "8:30 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-18",
        time: "8:30 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-18",
        time: "8:30 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-18",
        time: "8:30 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-18",
        time: "8:30 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-18",
        time: "8:30 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-18",
        time: "8:31 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-21",
        time: "8:33 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-21",
        time: "8:33 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-21",
        time: "8:33 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-21",
        time: "8:33 PM",
        percentage: 75,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-21",
        time: "8:33 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-21",
        time: "8:33 PM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-21",
        time: "8:34 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-22",
        time: "8:52 PM",
        percentage: 25,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-22",
        time: "8:52 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-22",
        time: "8:52 PM",
        percentage: 75,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-22",
        time: "8:53 PM",
        percentage: 75,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-22",
        time: "8:53 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-22",
        time: "8:53 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-22",
        time: "8:53 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-23",
        time: "8:56 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-23",
        time: "8:56 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-23",
        time: "8:56 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-23",
        time: "8:56 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-23",
        time: "8:56 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-23",
        time: "8:56 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-08-26",
        time: "8:57 PM",
        percentage: 67,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-08-27",
        time: "8:57 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-23",
        time: "10:50 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-23",
        time: "10:50 am",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-23",
        time: "上午10:54",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-23",
        time: "上午10:50",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-23",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-23",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-23",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-23",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-23",
        time: "上午10:50",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-23",
        time: "上午10:49",
        percentage: 90,
        exercise: "Ear Training",
        termsToReview: ["Major 6th"]
    },
    {
        student: "Thomas",
        date: "2026-09-23",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-23",
        time: "10:49 AM",
        percentage: 60,
        exercise: "Ear Training",
        termsToReview: ["Major 7th","Major 6th"]
    },
    {
        student: "William",
        date: "2026-09-23",
        time: "10:56 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-23",
        time: "10:58 AM",
        percentage: 70,
        exercise: "Ear Training",
        termsToReview: ["Minor 6th","Minor 2nd","Perfect 4th"]
    },
    {
        student: "Teresa",
        date: "2026-09-22",
        time: "上午10:49",
        percentage: 80,
        exercise: "Vocab",
        termsToReview: ["Glissando","Maestoso"]
    },
    {
        student: "Teresa",
        date: "2026-09-22",
        time: "上午10:50",
        percentage: 90,
        exercise: "Ear Training",
        termsToReview: ["Major 6th"]
    },
    {
        student: "Teresa",
        date: "2026-09-21",
        time: "上午10:48",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-21",
        time: "上午10:53",
        percentage: 90,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th"]
    },
    {
        student: "Calvin",
        date: "2026-09-22",
        time: "上午10:48",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-22",
        time: "上午10:52",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-21",
        time: "上午10:47",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-21",
        time: "上午10:57",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-24",
        time: "10:47 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-24",
        time: "10:50 am",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-24",
        time: "上午10:49",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-24",
        time: "上午10:57",
        percentage: 90,
        exercise: "Ear Training",
        termsToReview: ["Major 7th"]
    },
    {
        student: "Jocelyn",
        date: "2026-09-24",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-24",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-24",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-24",
        time: "10:53 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-24",
        time: "上午10:48",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-24",
        time: "上午10:47",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-24",
        time: "10:54 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-24",
        time: "10:49 AM",
        percentage: 90,
        exercise: "Ear Training",
        termsToReview: ["Major 7th"]
    },
    {
        student: "William",
        date: "2026-09-24",
        time: "10:54 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-24",
        time: "10:51 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Minor 6th","Major 7th"]
    },
    {
        student: "Alex",
        date: "2026-09-14",
        time: "9:22 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-15",
        time: "9:23 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-17",
        time: "9:24 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-18",
        time: "9:25 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-14",
        time: "9:26 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-15",
        time: "9:26 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-18",
        time: "9:27 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-14",
        time: "9:28 PM",
        percentage: 94,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-15",
        time: "9:28 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-17",
        time: "9:31 PM",
        percentage: 61,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-18",
        time: "9:32 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-14",
        time: "9:33 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-15",
        time: "9:34 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-18",
        time: "9:35 PM",
        percentage: 78,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-14",
        time: "9:35 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-15",
        time: "9:37 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-17",
        time: "9:37 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-18",
        time: "9:37 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-14",
        time: "9:40 PM",
        percentage: 44,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-15",
        time: "9:43 PM",
        percentage: 78,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-17",
        time: "9:45 PM",
        percentage: 0,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-18",
        time: "9:48 PM",
        percentage: 78,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-14",
        time: "9:51 PM",
        percentage: 94,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-15",
        time: "9:51 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-17",
        time: "9:54 PM",
        percentage: 72,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-18",
        time: "9:54 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-24",
        time: "6:31 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-24",
        time: "6:31 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-24",
        time: "6:31 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-24",
        time: "6:31 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-24",
        time: "6:31 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-24",
        time: "6:31 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-28",
        time: "6:31 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-28",
        time: "7:32 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-28",
        time: "10:50 am",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-28",
        time: "10:52 am",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-28",
        time: "上午10:46",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-28",
        time: "上午10:56",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-28",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-28",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-28",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-28",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-28",
        time: "上午10:46",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-28",
        time: "上午10:53",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-28",
        time: "10:53 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-28",
        time: "10:56 AM",
        percentage: 50,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd","Major 7th","Minor 6th","Minor 7th"]
    },
    {
        student: "Alex",
        date: "2026-09-28",
        time: "2:27 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-28",
        time: "2:28 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-28",
        time: "2:28 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-30",
        time: "2:33 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-30",
        time: "2:33 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-30",
        time: "2:33 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-30",
        time: "2:33 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-30",
        time: "2:33 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-08",
        time: "2:40 PM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-08",
        time: "2:40 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-08",
        time: "2:40 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-08",
        time: "2:40 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-08",
        time: "2:40 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-08",
        time: "2:40 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-08",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-08",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-09",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-09",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-08",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-08",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-09",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-09",
        time: "10:54 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Minor 6th","Tritone","Minor Triad"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-08",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-08",
        time: "10:50 AM",
        percentage: 90,
        exercise: "Ear Training",
        termsToReview: ["Tritone"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-09",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-09",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-08",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-08",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-09",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-09",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-08",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-08",
        time: "10:45 AM",
        percentage: 90,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th"]
    },
    {
        student: "Teresa",
        date: "2026-10-09",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-09",
        time: "10:48 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th"]
    },
    {
        student: "Thomas",
        date: "2026-10-08",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-08",
        time: "10:51 AM",
        percentage: 70,
        exercise: "Ear Training",
        termsToReview: ["Major 7th","Perfect 8ve"]
    },
    {
        student: "Thomas",
        date: "2026-10-09",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-09",
        time: "10:49 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Tritone","Minor Triad"]
    },
    {
        student: "Alex",
        date: "2026-09-29",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-29",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-29",
        time: "10:55 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-29",
        time: "10:49 AM",
        percentage: 70,
        exercise: "Ear Training",
        termsToReview: ["Tritone","Major 7th"]
    },
    {
        student: "Calvin",
        date: "2026-09-30",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-30",
        time: "10:49 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Minor 6th","Tritone"]
    },
    {
        student: "Jocelyn",
        date: "2026-09-29",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-29",
        time: "10:49 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Minor 6th","Tritone"]
    },
    {
        student: "Jocelyn",
        date: "2026-09-30",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-30",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-29",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-29",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-30",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-30",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-29",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-29",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-30",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-30",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-30",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-30",
        time: "10:49 AM",
        percentage: 60,
        exercise: "Ear Training",
        termsToReview: ["Perfect 4th","Tritone","Minor 2nd","Minor 7th"]
    },
    {
        student: "Calvin",
        date: "2026-08-26",
        time: "12:22 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-11",
        time: "9:11 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-21",
        time: "2:18 PM",
        percentage: 91,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-22",
        time: "2:19 PM",
        percentage: 89,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-23",
        time: "2:19 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-21",
        time: "2:52 PM",
        percentage: 59,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-22",
        time: "2:53 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-23",
        time: "2:55 PM",
        percentage: 77,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-21",
        time: "3:14 PM",
        percentage: 41,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-22",
        time: "3:15 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-23",
        time: "3:17 PM",
        percentage: 68,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-21",
        time: "3:58 PM",
        percentage: 64,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-22",
        time: "3:58 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-23",
        time: "4:00 PM",
        percentage: 77,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-21",
        time: "4:10 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-22",
        time: "4:10 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-23",
        time: "4:11 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-22",
        time: "4:23 PM",
        percentage: 89,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-23",
        time: "4:27 PM",
        percentage: 50,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-21",
        time: "4:31 PM",
        percentage: 50,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-21",
        time: "4:40 PM",
        percentage: 73,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-22",
        time: "4:41 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-23",
        time: "4:43 PM",
        percentage: 82,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-12",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-12",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-12",
        time: "10:54 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-12",
        time: "10:53 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Tritone"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-12",
        time: "10:56 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-12",
        time: "10:52 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Tritone"]
    },
    {
        student: "Maggie",
        date: "2026-10-12",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-12",
        time: "10:54 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-12",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-12",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-12",
        time: "10:53 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-12",
        time: "10:55 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Major 7th"]
    },
    {
        student: "William",
        date: "2026-10-12",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-12",
        time: "10:49 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Tritone"]
    },
    {
        student: "Alex",
        date: "2026-10-13",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-13",
        time: "10:43 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-14",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-14",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-13",
        time: "10:41 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-13",
        time: "10:46 AM",
        percentage: 67,
        exercise: "Ear Training",
        termsToReview: ["Minor 6th","Perfect 5th","Augmented Triad","Diminished Triad","Minor Triad"]
    },
    {
        student: "Calvin",
        date: "2026-10-14",
        time: "上午10:55",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-14",
        time: "上午10:55",
        percentage: 73,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th","Minor 6th","Major 7th","Augmented Triad"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-13",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-13",
        time: "10:43 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-14",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-14",
        time: "10:48 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Tritone"]
    },
    {
        student: "Maggie",
        date: "2026-10-13",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-13",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-14",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-14",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-13",
        time: "10:44 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-13",
        time: "10:43 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-13",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-13",
        time: "10:50 AM",
        percentage: 67,
        exercise: "Ear Training",
        termsToReview: ["Perfect 8ve","Tritone","Major 3rd","Augmented Triad"]
    },
    {
        student: "Thomas",
        date: "2026-10-14",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-14",
        time: "10:49 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd","Tritone","Diminished Triad"]
    },
    {
        student: "William",
        date: "2026-10-13",
        time: "10:53 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-13",
        time: "10:55 AM",
        percentage: 67,
        exercise: "Ear Training",
        termsToReview: ["Major 7th","Major 3rd","Minor 7th","Minor Triad"]
    },
    {
        student: "Thomas",
        date: "2026-09-24",
        time: "2:54 PM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-08-31",
        time: "2:56 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-11",
        time: "2:57 PM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-11",
        time: "2:57 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-23",
        time: "2:57 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-28",
        time: "2:59 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-28",
        time: "2:59 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-30",
        time: "3:00 PM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-08",
        time: "3:01 PM",
        percentage: 20,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-15",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-15",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-15",
        time: "10:44 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-15",
        time: "10:48 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Perfect 5th","Tritone","Augmented Triad"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-15",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-15",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-15",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-15",
        time: "10:50 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Tritone"]
    },
    {
        student: "Teresa",
        date: "2026-10-15",
        time: "10:44 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-15",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-15",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-15",
        time: "10:52 AM",
        percentage: 73,
        exercise: "Ear Training",
        termsToReview: ["Major 7th","Tritone"]
    },
    {
        student: "William",
        date: "2026-10-15",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-15",
        time: "10:48 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd","Minor 3rd","Diminished Triad"]
    },
    {
        student: "William",
        date: "2026-10-14",
        time: "2:36 PM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-14",
        time: "2:36 PM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-16",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-16",
        time: "10:48 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Major 6th"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-16",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-16",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-16",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-16",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-16",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-16",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-16",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-16",
        time: "10:51 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Perfect 4th","Tritone"]
    },
    {
        student: "Thomas",
        date: "2026-10-16",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-16",
        time: "10:49 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Minor Triad","Augmented Triad"]
    },
    {
        student: "William",
        date: "2026-10-16",
        time: "10:54 AM",
        percentage: 80,
        exercise: "Vocab",
        termsToReview: ["Basso Continuo","Figured Bass"]
    },
    {
        student: "William",
        date: "2026-10-16",
        time: "10:52 AM",
        percentage: 73,
        exercise: "Ear Training",
        termsToReview: ["Minor 3rd","Tritone","Diminished Triad"]
    },
    {
        student: "Alex",
        date: "2026-09-28",
        time: "8:46 AM",
        percentage: 78,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-30",
        time: "8:58 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-28",
        time: "9:14 PM",
        percentage: 89,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-30",
        time: "9:16 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-28",
        time: "9:24 PM",
        percentage: 67,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-30",
        time: "9:27 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-28",
        time: "9:32 PM",
        percentage: 78,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-30",
        time: "9:36 PM",
        percentage: 93,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-28",
        time: "9:38 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-30",
        time: "9:40 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-28",
        time: "9:45 PM",
        percentage: 78,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-30",
        time: "9:46 PM",
        percentage: 79,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-08",
        time: "9:52 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-09",
        time: "9:53 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-08",
        time: "9:55 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-09",
        time: "9:55 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-08",
        time: "10:00 PM",
        percentage: 71,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-09",
        time: "10:01 PM",
        percentage: 94,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-08",
        time: "10:07 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-09",
        time: "10:08 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-08",
        time: "10:10 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-09",
        time: "10:10 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-08",
        time: "10:12 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-09",
        time: "10:14 PM",
        percentage: 83,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-12",
        time: "10:29 AM",
        percentage: 20,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-12",
        time: "10:30 AM",
        percentage: 20,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-12",
        time: "10:30 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-12",
        time: "10:30 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-12",
        time: "10:30 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-12",
        time: "10:30 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-12",
        time: "10:30 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-13",
        time: "10:31 AM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-13",
        time: "10:31 AM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-13",
        time: "10:31 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-13",
        time: "10:31 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-13",
        time: "10:31 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-13",
        time: "10:31 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-13",
        time: "10:31 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-14",
        time: "10:34 AM",
        percentage: 75,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-14",
        time: "10:34 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-14",
        time: "10:34 AM",
        percentage: 75,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-14",
        time: "10:35 AM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-14",
        time: "10:35 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-14",
        time: "10:35 AM",
        percentage: 75,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-14",
        time: "10:35 AM",
        percentage: 25,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-08-25",
        time: "2:40 PM",
        percentage: 95,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-08-25",
        time: "2:45 PM",
        percentage: 84,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-08-25",
        time: "2:47 PM",
        percentage: 72,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-08-25",
        time: "2:48 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-08-26",
        time: "2:52 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-11",
        time: "12:47 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-11",
        time: "12:57 PM",
        percentage: 95,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-11",
        time: "1:21 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-11",
        time: "1:59 PM",
        percentage: 78,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-11",
        time: "2:03 PM",
        percentage: 95,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-04",
        time: "6:52 PM",
        percentage: 98,
        exercise: "Major Assessment",
        assessment: "Unit 1 Progress Check",
        criteria1: {"name":"MCQ-A","score":"24/28"},
        criteria2: {"name":"FRQ-A","score":"10/10"},
        criteria3: {"name":"MCQ-B","score":"28/28"},
        criteria4: {"name":"FRQ-B","score":"5/5"},
        criteria5: {"name":"Vocab","score":"100"},
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-04",
        time: "6:53 PM",
        percentage: 100,
        exercise: "Major Assessment",
        assessment: "Unit 1 Progress Check",
        criteria1: {"name":"MCQ-A","score":"27/28"},
        criteria2: {"name":"FRQ-A","score":"10/10"},
        criteria3: {"name":"MCQ-B","score":"28/28"},
        criteria4: {"name":"FRQ-B","score":"5/5"},
        criteria5: {"name":"Vocab","score":"100"},
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-04",
        time: "6:53 PM",
        percentage: 96.4,
        exercise: "Major Assessment",
        assessment: "Unit 1 Progress Check",
        criteria1: {"name":"MCQ-A","score":"25/28"},
        criteria2: {"name":"FRQ-A","score":"10/10"},
        criteria3: {"name":"MCQ-B","score":"25/28"},
        criteria4: {"name":"FRQ-B","score":"5/5"},
        criteria5: {"name":"Vocab","score":"100"},
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-04",
        time: "6:53 PM",
        percentage: 96.4,
        exercise: "Major Assessment",
        assessment: "Unit 1 Progress Check",
        criteria1: {"name":"MCQ-A","score":"23/28"},
        criteria2: {"name":"FRQ-A","score":"10/10"},
        criteria3: {"name":"MCQ-B","score":"27/28"},
        criteria4: {"name":"FRQ-B","score":"5/5"},
        criteria5: {"name":"Vocab","score":"100"},
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-04",
        time: "6:53 PM",
        percentage: 97.2,
        exercise: "Major Assessment",
        assessment: "Unit 1 Progress Check",
        criteria1: {"name":"MCQ-A","score":"24/28"},
        criteria2: {"name":"FRQ-A","score":"10/10"},
        criteria3: {"name":"MCQ-B","score":"27/28"},
        criteria4: {"name":"FRQ-B","score":"5/5"},
        criteria5: {"name":"Vocab","score":"100"},
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-04",
        time: "6:54 PM",
        percentage: 96.6,
        exercise: "Major Assessment",
        assessment: "Unit 1 Progress Check",
        criteria1: {"name":"MCQ-A","score":"24/28"},
        criteria2: {"name":"FRQ-A","score":"10/10"},
        criteria3: {"name":"MCQ-B","score":"26/28"},
        criteria4: {"name":"FRQ-B","score":"5/5"},
        criteria5: {"name":"Vocab","score":"100"},
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-04",
        time: "6:54 PM",
        percentage: 91,
        exercise: "Major Assessment",
        assessment: "Unit 1 Progress Check",
        criteria1: {"name":"MCQ-A","score":"25/28"},
        criteria2: {"name":"FRQ-A","score":"10/10"},
        criteria3: {"name":"MCQ-B","score":"23/28"},
        criteria4: {"name":"FRQ-B","score":"4/5"},
        criteria5: {"name":"Vocab","score":"100"},
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-29",
        time: "2:28 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-29",
        time: "2:31 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-29",
        time: "2:31 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-29",
        time: "2:31 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-29",
        time: "2:31 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-29",
        time: "2:31 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-24",
        time: "2:19 PM",
        percentage: 89,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-24",
        time: "2:59 PM",
        percentage: 56,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-24",
        time: "3:19 PM",
        percentage: 67,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-24",
        time: "4:02 PM",
        percentage: 89,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-24",
        time: "4:12 PM",
        percentage: 84,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-09-24",
        time: "4:45 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-09-29",
        time: "2:59 PM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-09",
        time: "3:17 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-09",
        time: "3:17 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-09",
        time: "3:17 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-09",
        time: "3:17 PM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-09",
        time: "3:18 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-09-29",
        time: "8:49 AM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-09-29",
        time: "9:15 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-09-29",
        time: "9:26 PM",
        percentage: 77,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-09-29",
        time: "9:35 PM",
        percentage: 82,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-09-29",
        time: "9:40 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-15",
        time: "10:36 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-15",
        time: "10:36 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-15",
        time: "10:36 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-15",
        time: "10:36 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-15",
        time: "10:36 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-15",
        time: "10:36 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-15",
        time: "10:36 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-16",
        time: "10:37 AM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-16",
        time: "10:37 AM",
        percentage: 40,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-16",
        time: "10:37 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-16",
        time: "10:37 AM",
        percentage: 60,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-16",
        time: "10:37 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-16",
        time: "10:37 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-16",
        time: "10:37 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-20",
        time: "12:15 PM",
        percentage: 92.5,
        exercise: "Major Assessment",
        assessment: "Unit 2 Progress Check",
        criteria1: {"name":"MCQ-A","score":"85.7"},
        criteria2: {"name":"FRQ-A","score":"100"},
        criteria3: {"name":"MCQ-B","score":"78"},
        criteria4: {"name":"FRQ-B","score":"100"},
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-20",
        time: "12:15 PM",
        percentage: 100,
        exercise: "Major Assessment",
        assessment: "Unit 2 Progress Check",
        criteria1: {"name":"MCQ-A","score":"94.2"},
        criteria2: {"name":"FRQ-A","score":"100"},
        criteria3: {"name":"MCQ-B","score":"100"},
        criteria4: {"name":"FRQ-B","score":"100"},
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-20",
        time: "12:15 PM",
        percentage: 94,
        exercise: "Major Assessment",
        assessment: "Unit 2 Progress Check",
        criteria1: {"name":"MCQ-A","score":"100"},
        criteria2: {"name":"FRQ-A","score":"75"},
        criteria3: {"name":"MCQ-B","score":"95"},
        criteria4: {"name":"FRQ-B","score":"100"},
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-20",
        time: "12:15 PM",
        percentage: 94,
        exercise: "Major Assessment",
        assessment: "Unit 2 Progress Check",
        criteria1: {"name":"MCQ-A","score":"80"},
        criteria2: {"name":"FRQ-A","score":"95"},
        criteria3: {"name":"MCQ-B","score":"95"},
        criteria4: {"name":"FRQ-B","score":"100"},
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-20",
        time: "12:16 PM",
        percentage: 90.8,
        exercise: "Major Assessment",
        assessment: "Unit 2 Progress Check",
        criteria1: {"name":"MCQ-A","score":"82.5"},
        criteria2: {"name":"FRQ-A","score":"85"},
        criteria3: {"name":"MCQ-B","score":"89"},
        criteria4: {"name":"FRQ-B","score":"100"},
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-20",
        time: "12:16 PM",
        percentage: 96.6,
        exercise: "Major Assessment",
        assessment: "Unit 2 Progress Check",
        criteria1: {"name":"MCQ-A","score":"91.4"},
        criteria2: {"name":"FRQ-A","score":"100"},
        criteria3: {"name":"MCQ-B","score":"95"},
        criteria4: {"name":"FRQ-B","score":"100"},
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-20",
        time: "12:16 PM",
        percentage: 86.5,
        exercise: "Major Assessment",
        assessment: "Unit 2 Progress Check",
        criteria1: {"name":"MCQ-A","score":"74.2"},
        criteria2: {"name":"FRQ-A","score":"80"},
        criteria3: {"name":"MCQ-B","score":"86"},
        criteria4: {"name":"FRQ-B","score":"100"},
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-19",
        time: "5:38 AM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-19",
        time: "5:38 AM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-19",
        time: "5:38 AM",
        percentage: 84,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-19",
        time: "5:38 AM",
        percentage: 84,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-19",
        time: "5:38 AM",
        percentage: 84,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-19",
        time: "5:38 AM",
        percentage: 67,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-19",
        time: "5:39 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-20",
        time: "5:40 AM",
        percentage: 43,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-20",
        time: "5:41 AM",
        percentage: 43,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-20",
        time: "5:41 AM",
        percentage: 85,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-20",
        time: "5:41 AM",
        percentage: 71,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-20",
        time: "5:41 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-20",
        time: "5:41 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-20",
        time: "5:41 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-21",
        time: "10:44 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-21",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-21",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-21",
        time: "10:45 AM",
        percentage: 60,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd","Diminished Triad","Minor 7","Half-Diminished 7"]
    },
    {
        student: "Maggie",
        date: "2026-10-21",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-21",
        time: "10:49 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Diminished 7"]
    },
    {
        student: "Teresa",
        date: "2026-10-21",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-21",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-21",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-21",
        time: "10:50 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Minor 7"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-21",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-21",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-21",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-21",
        time: "10:52 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Tritone","Major 7th"]
    },
    {
        student: "Alex",
        date: "2026-10-12",
        time: "7:25 PM",
        percentage: 71,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-13",
        time: "7:27 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-14",
        time: "7:28 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-15",
        time: "7:29 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-16",
        time: "7:29 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-22",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-22",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-22",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-22",
        time: "10:47 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Tritone"]
    },
    {
        student: "Thomas",
        date: "2026-10-22",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-22",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-22",
        time: "10:43 AM",
        percentage: 80,
        exercise: "Vocab",
        termsToReview: ["Counterpoint","Leitmotif"]
    },
    {
        student: "Calvin",
        date: "2026-10-22",
        time: "10:48 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Major 7th","Tritone"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-22",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-22",
        time: "10:53 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th","Diminished 7","Half-Diminished 7"]
    },
    {
        student: "William",
        date: "2026-10-22",
        time: "11:01 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-22",
        time: "10:58 AM",
        percentage: 67,
        exercise: "Ear Training",
        termsToReview: ["Tritone","Minor 6th","Diminished Triad","Diminished 7","Half-Diminished 7"]
    },
    {
        student: "Calvin",
        date: "2026-10-12",
        time: "8:07 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-13",
        time: "8:07 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-14",
        time: "8:09 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-15",
        time: "8:10 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-16",
        time: "8:14 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-12",
        time: "8:19 PM",
        percentage: 64,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-13",
        time: "8:20 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-14",
        time: "8:23 PM",
        percentage: 57,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-15",
        time: "8:24 PM",
        percentage: 91,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-16",
        time: "8:26 PM",
        percentage: 79,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-12",
        time: "8:31 PM",
        percentage: 85,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-13",
        time: "8:31 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-14",
        time: "8:34 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-15",
        time: "8:36 PM",
        percentage: 95,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-16",
        time: "8:38 PM",
        percentage: 71,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-12",
        time: "8:57 PM",
        percentage: 93,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-13",
        time: "8:58 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-14",
        time: "9:00 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-15",
        time: "9:02 PM",
        percentage: 91,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-16",
        time: "9:03 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-12",
        time: "9:28 PM",
        percentage: 57,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-13",
        time: "9:29 PM",
        percentage: 93,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-15",
        time: "9:32 PM",
        percentage: 95,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-16",
        time: "9:34 PM",
        percentage: 71,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-12",
        time: "9:47 PM",
        percentage: 64,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-13",
        time: "9:49 PM",
        percentage: 71,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-14",
        time: "9:52 PM",
        percentage: 64,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-15",
        time: "9:54 PM",
        percentage: 91,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-16",
        time: "9:55 PM",
        percentage: 71,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-23",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-23",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-23",
        time: "10:54 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-23",
        time: "10:49 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Tritone","Augmented Triad"]
    },
    {
        student: "Maggie",
        date: "2026-10-23",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-23",
        time: "10:52 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Diminished 7"]
    },
    {
        student: "Teresa",
        date: "2026-10-23",
        time: "10:55 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-23",
        time: "11:02 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Diminished 7","Half-Diminished 7"]
    },
    {
        student: "William",
        date: "2026-10-23",
        time: "10:43 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-23",
        time: "10:47 AM",
        percentage: 53,
        exercise: "Ear Training",
        termsToReview: ["Perfect 4th","Perfect 5th","Minor 7","Half-Diminished 7","Dominant 7","Diminished 7"]
    },
    {
        student: "Teresa",
        date: "2026-10-21",
        time: "9:50 AM",
        percentage: 17,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-21",
        time: "9:50 AM",
        percentage: 33,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-21",
        time: "9:50 AM",
        percentage: 33,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-21",
        time: "9:50 AM",
        percentage: 67,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-21",
        time: "9:50 AM",
        percentage: 67,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-21",
        time: "9:51 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-21",
        time: "9:51 AM",
        percentage: 83,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-22",
        time: "9:51 AM",
        percentage: 57,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-22",
        time: "9:51 AM",
        percentage: 57,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-22",
        time: "9:51 AM",
        percentage: 85,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-22",
        time: "9:51 AM",
        percentage: 85,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-22",
        time: "9:51 AM",
        percentage: 85,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-22",
        time: "9:51 AM",
        percentage: 71,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-21",
        time: "8:07 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-22",
        time: "8:07 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-23",
        time: "8:07 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-21",
        time: "8:12 PM",
        percentage: 79,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-22",
        time: "8:13 PM",
        percentage: 83,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-23",
        time: "8:15 PM",
        percentage: 67,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-22",
        time: "8:56 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-21",
        time: "8:59 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-22",
        time: "8:59 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-23",
        time: "9:00 PM",
        percentage: 94,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-21",
        time: "9:17 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-23",
        time: "9:18 PM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-21",
        time: "9:31 PM",
        percentage: 79,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-22",
        time: "9:33 PM",
        percentage: 83,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-21",
        time: "9:39 PM",
        percentage: 86,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-22",
        time: "9:42 PM",
        percentage: 75,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-23",
        time: "9:44 PM",
        percentage: 78,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-23",
        time: "10:52 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-23",
        time: "10:52 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-23",
        time: "10:52 AM",
        percentage: 90,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-23",
        time: "10:52 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-22",
        time: "9:23 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-23",
        time: "9:24 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-23",
        time: "9:24 AM",
        percentage: 80,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-26",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-26",
        time: "10:50 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Minor 6th","Perfect 5th","Major 6th"]
    },
    {
        student: "Thomas",
        date: "2026-10-26",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-26",
        time: "10:50 AM",
        percentage: 67,
        exercise: "Ear Training",
        termsToReview: ["Perfect 4th","Minor 2nd","Major 7th","Half-Diminished 7","Minor 7"]
    },
    {
        student: "Maggie",
        date: "2026-10-26",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-26",
        time: "10:53 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Major 7th","Diminished 7"]
    },
    {
        student: "William",
        date: "2026-10-26",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-26",
        time: "10:54 AM",
        percentage: 74,
        exercise: "Ear Training",
        termsToReview: ["Minor 6th","Minor 7th","Minor 2nd"]
    },
    {
        student: "Alex",
        date: "2026-10-26",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-26",
        time: "10:55 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: ["Major 7th"]
    },
    {
        student: "Teresa",
        date: "2026-10-26",
        time: "10:53 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-26",
        time: "10:55 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: ["Dominant 7"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-26",
        time: "10:53 AM",
        percentage: 80,
        exercise: "Vocab",
        termsToReview: ["Perfect Authentic Cadence","Plagal Cadence"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-26",
        time: "10:56 AM",
        percentage: 94,
        exercise: "Ear Training",
        termsToReview: ["Major 6th","Perfect 8ve"]
    },
    {
        student: "Alex",
        date: "2026-10-23",
        time: "11:32 PM",
        percentage: 70,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-26",
        time: "11:33 PM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-26",
        time: "11:33 PM",
        percentage: 84,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-26",
        time: "11:33 PM",
        percentage: 84,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-26",
        time: "11:33 PM",
        percentage: 84,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-26",
        time: "11:33 PM",
        percentage: 67,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-26",
        time: "11:33 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-26",
        time: "11:34 PM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-29",
        time: "10:55 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-29",
        time: "10:55 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Perfect 4th","Minor 7th","Minor 7"]
    },
    {
        student: "Thomas",
        date: "2026-10-29",
        time: "10:54 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-29",
        time: "10:57 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Tritone","Major 2nd"]
    },
    {
        student: "Teresa",
        date: "2026-10-29",
        time: "10:55 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-29",
        time: "10:56 AM",
        percentage: 94,
        exercise: "Ear Training",
        termsToReview: ["Major 7th","Minor 7th"]
    },
    {
        student: "Maggie",
        date: "2026-10-29",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-29",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: ["Major 7th"]
    },
    {
        student: "William",
        date: "2026-10-29",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-29",
        time: "10:53 AM",
        percentage: 67,
        exercise: "Ear Training",
        termsToReview: ["Perfect 5th","Perfect 4th","Major 7th","Diminished Triad","Half-Diminished 7"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-29",
        time: "11:02 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-29",
        time: "10:55 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Major 2nd","Minor 6th","Minor 2nd","Minor 7"]
    },
    {
        student: "Alex",
        date: "2026-10-29",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-29",
        time: "10:54 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: ["Minor 3rd"]
    },
    {
        student: "Maggie",
        date: "2026-10-28",
        time: "10:59 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-28",
        time: "10:58 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Major 6th","Half-Diminished 7"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-28",
        time: "11:02 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-28",
        time: "11:18 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-28",
        time: "11:12 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-28",
        time: "11:11 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd","Minor 3rd","Minor 7"]
    },
    {
        student: "Calvin",
        date: "2026-10-28",
        time: "11:07 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-28",
        time: "10:59 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Tritone","Minor 3rd","Major 3rd"]
    },
    {
        student: "Teresa",
        date: "2026-10-28",
        time: "10:58 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-28",
        time: "11:00 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Diminished 7"]
    },
    {
        student: "William",
        date: "2026-10-28",
        time: "10:56 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-28",
        time: "10:59 AM",
        percentage: 53,
        exercise: "Ear Training",
        termsToReview: ["Perfect 4th","Major 7th","Minor 3rd","Perfect 8ve","Minor 6th","Diminished Triad","Minor 7"]
    },
    {
        student: "Alex",
        date: "2026-10-27",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-27",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-27",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-27",
        time: "10:51 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Minor 3rd","Minor 7"]
    },
    {
        student: "Thomas",
        date: "2026-10-27",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-27",
        time: "10:52 AM",
        percentage: 67,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th","Major 6th","Perfect 4th","Major 3rd","Diminished 7"]
    },
    {
        student: "Calvin",
        date: "2026-10-27",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-27",
        time: "10:48 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd","Major 2nd"]
    },
    {
        student: "Teresa",
        date: "2026-10-27",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-27",
        time: "10:50 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd","Major 7th"]
    },
    {
        student: "Maggie",
        date: "2026-10-27",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-27",
        time: "10:48 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Diminished 7"]
    },
    {
        student: "William",
        date: "2026-10-27",
        time: "10:44 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-27",
        time: "10:46 AM",
        percentage: 60,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th","Minor 6th","Diminished Triad","Minor 7","Half-Diminished 7"]
    },
    {
        student: "Calvin",
        date: "2026-10-27",
        time: "11:55 AM",
        percentage: 57,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-27",
        time: "11:55 AM",
        percentage: 57,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-27",
        time: "11:55 AM",
        percentage: 57,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-27",
        time: "11:55 AM",
        percentage: 43,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-27",
        time: "11:55 AM",
        percentage: 71,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-27",
        time: "11:56 AM",
        percentage: 71,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-27",
        time: "11:56 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-28",
        time: "11:56 AM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-28",
        time: "11:56 AM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-28",
        time: "11:56 AM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-28",
        time: "11:56 AM",
        percentage: 50,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-28",
        time: "11:57 AM",
        percentage: 84,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-28",
        time: "11:57 AM",
        percentage: 67,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-28",
        time: "11:57 AM",
        percentage: 100,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-11-03",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-11-03",
        time: "10:52 AM",
        percentage: 100,
        originalPercentage: 93,
        curvedPercentage: 100,
        curveApplied: true,
        exercise: "Ear Training",
        termsToReview: ["Diminished Triad"]
    },
    {
        student: "Maggie",
        date: "2026-11-03",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-11-03",
        time: "10:55 AM",
        percentage: 80,
        originalPercentage: 73,
        curvedPercentage: 80,
        curveApplied: true,
        exercise: "Ear Training",
        termsToReview: ["Minor 3rd","Augmented Triad","Half-Diminished 7","Minor 7"]
    },
    {
        student: "William",
        date: "2026-11-03",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-11-03",
        time: "10:55 AM",
        percentage: 67,
        originalPercentage: 60,
        curvedPercentage: 67,
        curveApplied: true,
        exercise: "Ear Training",
        termsToReview: ["Perfect 4th","Minor 3rd","Minor Triad","Diminished Triad","Half-Diminished 7"]
    },
    {
        student: "Thomas",
        date: "2026-11-03",
        time: "10:56 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-11-03",
        time: "10:55 AM",
        percentage: 87,
        originalPercentage: 80,
        curvedPercentage: 87,
        curveApplied: true,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd","Major 2nd","Minor 7th"]
    },
    {
        student: "Calvin",
        date: "2026-11-03",
        time: "10:58 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-11-03",
        time: "10:57 AM",
        percentage: 80,
        originalPercentage: 73,
        curvedPercentage: 80,
        curveApplied: true,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th","Perfect 4th","Augmented Triad","Minor 7"]
    },
    {
        student: "Teresa",
        date: "2026-11-03",
        time: "10:53 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-11-03",
        time: "10:55 AM",
        percentage: 94,
        originalPercentage: 87,
        curvedPercentage: 94,
        curveApplied: true,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th","Dominant 7"]
    },
    {
        student: "Jocelyn",
        date: "2026-11-03",
        time: "10:57 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-11-03",
        time: "10:57 AM",
        percentage: 80,
        originalPercentage: 73,
        curvedPercentage: 80,
        curveApplied: true,
        exercise: "Ear Training",
        termsToReview: ["Minor 3rd","Minor Triad","Diminished 7","Half-Diminished 7"]
    },
    {
        student: "William",
        date: "2026-11-04",
        time: "10:52 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-11-04",
        time: "10:54 AM",
        percentage: 67,
        exercise: "Ear Training",
        termsToReview: ["Perfect 4th","Major 6th","Minor 3rd","Augmented Triad","Dominant 7"]
    },
    {
        student: "Maggie",
        date: "2026-11-04",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-11-04",
        time: "10:53 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Minor 2nd","Minor 7th"]
    },
    {
        student: "Thomas",
        date: "2026-11-04",
        time: "10:48 AM",
        percentage: 80,
        exercise: "Vocab",
        termsToReview: ["Active / Tendency Tones","Glissando"]
    },
    {
        student: "Thomas",
        date: "2026-11-04",
        time: "10:53 AM",
        percentage: 73,
        exercise: "Ear Training",
        termsToReview: ["Major 2nd","Major 6th","Diminished Triad","Half-Diminished 7"]
    },
    {
        student: "Teresa",
        date: "2026-11-04",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-11-04",
        time: "10:49 AM",
        percentage: 93,
        exercise: "Ear Training",
        termsToReview: ["Major 6th"]
    },
    {
        student: "Alex",
        date: "2026-11-04",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-11-04",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-11-04",
        time: "10:44 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-11-04",
        time: "10:48 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Minor 7th","Major 6th","Half-Diminished 7"]
    },
    {
        student: "Jocelyn",
        date: "2026-11-04",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-11-04",
        time: "10:55 AM",
        percentage: 73,
        exercise: "Ear Training",
        termsToReview: ["Major 3rd","Minor 6th","Augmented Triad","Diminished 7"]
    },
    {
        student: "Jocelyn",
        date: "2026-10-29",
        time: "8:46 PM",
        percentage: 85,
        originalPercentage: 71,
        curvedPercentage: 85,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-29",
        time: "8:46 PM",
        percentage: 57,
        originalPercentage: 43,
        curvedPercentage: 57,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-29",
        time: "8:46 PM",
        percentage: 85,
        originalPercentage: 71,
        curvedPercentage: 85,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-29",
        time: "8:46 PM",
        percentage: 85,
        originalPercentage: 71,
        curvedPercentage: 85,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-29",
        time: "8:46 PM",
        percentage: 71,
        originalPercentage: 57,
        curvedPercentage: 71,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-29",
        time: "8:46 PM",
        percentage: 71,
        originalPercentage: 57,
        curvedPercentage: 71,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-29",
        time: "8:46 PM",
        percentage: 100,
        originalPercentage: 86,
        curvedPercentage: 100,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-10-30",
        time: "8:47 PM",
        percentage: 80,
        originalPercentage: 30,
        curvedPercentage: 80,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-10-30",
        time: "8:47 PM",
        percentage: 100,
        originalPercentage: 50,
        curvedPercentage: 100,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-10-30",
        time: "8:47 PM",
        percentage: 100,
        originalPercentage: 50,
        curvedPercentage: 100,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-10-30",
        time: "8:47 PM",
        percentage: 60,
        originalPercentage: 50,
        curvedPercentage: 60,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-10-30",
        time: "8:47 PM",
        percentage: 100,
        originalPercentage: 90,
        curvedPercentage: 100,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-10-30",
        time: "8:48 PM",
        percentage: 90,
        originalPercentage: 80,
        curvedPercentage: 90,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-10-30",
        time: "8:48 PM",
        percentage: 90,
        originalPercentage: 80,
        curvedPercentage: 90,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-11-03",
        time: "8:48 PM",
        percentage: 72,
        originalPercentage: 43,
        curvedPercentage: 72,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-11-03",
        time: "8:48 PM",
        percentage: 72,
        originalPercentage: 43,
        curvedPercentage: 72,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-11-03",
        time: "8:49 PM",
        percentage: 72,
        originalPercentage: 43,
        curvedPercentage: 72,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-11-03",
        time: "8:49 PM",
        percentage: 100,
        originalPercentage: 71,
        curvedPercentage: 100,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-11-03",
        time: "8:49 PM",
        percentage: 100,
        originalPercentage: 71,
        curvedPercentage: 100,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-11-03",
        time: "8:49 PM",
        percentage: 100,
        originalPercentage: 71,
        curvedPercentage: 100,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-11-03",
        time: "8:49 PM",
        percentage: 86,
        originalPercentage: 57,
        curvedPercentage: 86,
        curveApplied: true,
        exercise: "MCQs",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-11-05",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-11-05",
        time: "10:47 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Minor 2nd","Augmented Triad","Minor 7"]
    },
    {
        student: "Calvin",
        date: "2026-11-05",
        time: "10:44 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-11-05",
        time: "10:48 AM",
        percentage: 73,
        exercise: "Ear Training",
        termsToReview: ["Perfect 5th","Minor 7th","Major 3rd","Major 7"]
    },
    {
        student: "Jocelyn",
        date: "2026-11-05",
        time: "10:55 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-11-05",
        time: "10:57 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Diminished Triad","Half-Diminished 7"]
    },
    {
        student: "Maggie",
        date: "2026-11-05",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-11-05",
        time: "10:53 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-11-05",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Teresa",
        date: "2026-11-05",
        time: "10:53 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Diminished 7","Half-Diminished 7"]
    },
    {
        student: "Thomas",
        date: "2026-11-05",
        time: "10:46 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-11-05",
        time: "10:50 AM",
        percentage: 73,
        exercise: "Ear Training",
        termsToReview: ["Diminished Triad","Augmented Triad","Half-Diminished 7"]
    },
    {
        student: "William",
        date: "2026-11-05",
        time: "10:47 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-11-05",
        time: "10:46 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Major 6th","Half-Diminished 7","Dominant 7"]
    },
    {
        student: "Thomas",
        date: "2026-11-06",
        time: "10:55 AM",
        percentage: 67,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-11-06",
        time: "10:55 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Thomas",
        date: "2026-11-06",
        time: "10:55 AM",
        percentage: 100,
        exercise: "Sight Singing",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-11-06",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Alex",
        date: "2026-11-06",
        time: "10:49 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-11-06",
        time: "10:48 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Maggie",
        date: "2026-11-06",
        time: "10:51 AM",
        percentage: 100,
        exercise: "Ear Training",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-11-06",
        time: "10:50 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Jocelyn",
        date: "2026-11-06",
        time: "10:49 AM",
        percentage: 87,
        exercise: "Ear Training",
        termsToReview: ["Augmented Triad","Minor Triad"]
    },
    {
        student: "Calvin",
        date: "2026-11-06",
        time: "10:44 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "Calvin",
        date: "2026-11-06",
        time: "10:49 AM",
        percentage: 67,
        exercise: "Ear Training",
        termsToReview: ["Perfect 5th","Perfect 4th","Minor 6th","Augmented Triad","Major Triad"]
    },
    {
        student: "Teresa",
        date: "2026-11-06",
        time: "10:48 AM",
        percentage: 80,
        exercise: "Vocab",
        termsToReview: ["Counterpoint","Doubling"]
    },
    {
        student: "Teresa",
        date: "2026-11-06",
        time: "10:49 AM",
        percentage: 80,
        exercise: "Ear Training",
        termsToReview: ["Major 7th","Perfect 4th","Diminished 7"]
    },
    {
        student: "William",
        date: "2026-11-06",
        time: "10:45 AM",
        percentage: 100,
        exercise: "Vocab",
        termsToReview: []
    },
    {
        student: "William",
        date: "2026-11-06",
        time: "10:44 AM",
        percentage: 73,
        exercise: "Ear Training",
        termsToReview: ["Major 7th","Minor 7th","Augmented Triad"]
    },
];