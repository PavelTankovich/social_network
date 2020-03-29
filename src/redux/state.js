const state = {
    dialogsState: { 
        usersInfo: [
            {
                id: 'vatson',
                name: 'Dog Vatson',
                friend: true,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI'
            },
            {
                id: 'harry',
                name: 'Cat Harry',
                friend: false,
                avatar: 'https://cs8.pikabu.ru/post_img/big/2017/02/10/8/1486732859195522448.jpg'
            },
            {
                id: 'jocker',
                name: 'Dog Jocker',
                friend: true,
                avatar: 'https://i.forfun.com/j9k4l5lc.jpeg'
            },
            {
                id: 'zord',
                name: 'Dog Zord',
                friend: true,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUsXCljibokfNvJV6UKn6xBUdqLLvGy50eA2pd0saYGVfD1A2r'
            }
        ],
        messagesInfo: [
            {
                id: 'hbhay',
                idUser: '',
                messageInfo: {
                    text: 'Hi bro, how are you?'
                },
                avatar: 'https://i.pinimg.com/736x/17/df/43/17df43c76a1155a2efc74581e404f494.jpg',
                isMyMessage: true
            },
            {
                id: 'hif',
                idUser: 'vatson',
                messageInfo: {
                    text: 'Hi, i\'m fine!'
                },
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI',
            },
            {
                id: 'lgbc',
                idUser: 'vatson',
                messageInfo: {
                    text: 'Let\'s go bark cats?'
                },
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQITmE6hyq7RBxa8T7OiAHftxOEph097nZf2UxDr44mjhovGKxI',
            },
            {
                id: 'gilg',
                idUser: '',
                messageInfo: {
                    text: 'Good idea let\'s go!!!'
                },
                avatar: 'https://i.pinimg.com/736x/17/df/43/17df43c76a1155a2efc74581e404f494.jpg',
                isMyMessage: true
            },
        ]
    },
    profileState: {
        postsData: [
            {
                id: 'imgb',
                text: 'I\'m good boy =)',
                likes: {
                    count: 0
                },
                avatar: 'https://i.pinimg.com/736x/17/df/43/17df43c76a1155a2efc74581e404f494.jpg'
            },
            {
                id: 'ww',
                text: 'Wow wow',
                likes: {
                    count: 0
                },
                avatar: 'https://i.pinimg.com/736x/17/df/43/17df43c76a1155a2efc74581e404f494.jpg'
            }
        ]
    },
    navigationState: null
}; 

state.navigationState = {
    friendsInfo: state.dialogsState.usersInfo.filter(user => user.friend)
}

export default state;