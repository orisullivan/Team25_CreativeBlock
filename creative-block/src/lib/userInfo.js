export async function getUserDetails(userID) {
  const dataSet = {
    'user1': {
      username: 'user1',
      description: 'Lorem ipsum dolor sit amet...',
      date: 'Oct 10, 2022'
    },
    'usertesttest2': {
      username: 'usertesttest2',
      description: 'Lorem ipsum dolor sit amet...',
      date: 'Oct 20, 2022'
    },
    'testytestyuser3': {
      username: 'testytestyuser3',
      description: 'Lorem ipsum dolor sit amet...',
      date: 'Oct 30, 2022'
    }
  }
  return dataSet[userID]
}

export async function getUserIDList() {
  return [{
    params: {
      id: 'user1'
    }
  }, {
    params: {
      id: 'usertesttest2'
    }
  }, {
    params: {
      id: 'testytestyuser3'
    }
  }]
}