const numbers = [2, 7, 11, 15, 4, 5];
const target = 9;
function findpairofsum(arr,target)
{
    const pairs=[];
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j<arr.length;j++)
        {
            if(arr[i]+arr[j]==target)
            {
                pairs.push(arr[i],arr[j]);
            }
        }
    }
    return pairs;
}

var result=findpairofsum(numbers,target);
console.log("answer is"+result);
