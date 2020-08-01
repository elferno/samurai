
// state.friends.
const initialState = {
  list: [
    {
      id: 0,
      name: 'Dimych',
      avatarSRC: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLw-qZbOBQx5D_XOrUcgoBveudF5epe_DqBg&usqp=CAU'
    },
    {
      id: 1,
      name: 'Klaus',
      avatarSRC: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8Dkhe1mZT_0f6Ulh5yshS-NZPMcwKJ8tKsg&usqp=CAU'
    },
    {
      id: 2,
      name: 'Eby',
      avatarSRC: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRniCRvfYCPVI7ovlNCr3IDn1xxVBqeaJoppw&usqp=CAU'
    }
  ],

  possible_list: []
}

const friendsReducer = (state = initialState, action) => {
  return state
}

export default friendsReducer