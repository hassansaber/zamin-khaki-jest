const cardio = {
  reverseString: (str) => str.toLowerCase().split("").reverse().join(""),
  chunkArray: (arr, len) => {
    const chunkedArr = [];
    arr.forEach((val) => {
      const last = chunkedArr[chunkedArr.length - 1];
      !last || last.length === len ? chunkedArr.push([val]) : last.push(val);
    });
    return chunkedArr;
  },
  isAnagram: (str1, str2) => {
    const formatStr = (str) =>
      str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

    return formatStr(str1) === formatStr(str2);
  },
};

module.exports = cardio;
