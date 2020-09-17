
export const parseStringAsArray = (arrayAsString: string) => {
  let dArr = arrayAsString.split("-"); 
  return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0]
};