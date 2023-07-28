const APICall = async params => {
  return new Promise(async (resolve, reject) => {
    try {
      const respons = await fetch(params.url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(responseJson => {
          resolve(responseJson);
        });
    } catch (err) {
      console.log('errr=>>', err);
      reject(err);
    }
  });
};

export {APICall};
