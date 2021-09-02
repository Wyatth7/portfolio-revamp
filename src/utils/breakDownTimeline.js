const breakDownTimeline = (obj, date) => {
  const keys = Object.keys(obj);

  let filledArr = [];

  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < obj[keys[i]]; i++) {
      if (obj[keys[i]] === "placeholder, delete later") {
        // replace body later
        return true;
      }
    }
  }
};

export default breakDownTimeline;
