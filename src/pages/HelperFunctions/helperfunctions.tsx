export const createChapters = function(maxNumber:number){
    let array = range(1, maxNumber)
    let valuesArray = [...(array).map(val=>({label: String(val), id: val}))]
    return valuesArray
  }
  
export  function range(start:number, end:number, step = 1):number[] {
    const result = [];
    
    if (step === 0) {
      throw new Error("Step cannot be zero");
    }
  
    if (start <= end) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
  
    return result;
  }

export  function trimID(idValue:string, idPrefix:string):number{
    return Number(idValue.substring(idPrefix.length-1))+1
    
  }