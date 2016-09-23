var words = ["hello", "what", "is", "up", "dude"]

function Lengths(Input)
{
  var Output = []
  for (var x=0; x<Input.length; x++)
    {
      Output.push(Input[x].length);
    }
    return Output;
}


function Transmogrifier (a,b,c)
{
  return Math.pow(a*b,c);
}

function WordReverse (Input)
{
  var FinalReverse = [];
  var Output = Input.split(" ");
  for (x=0; x=Output.length; x++)
    {
      FinalReverse.push(Output.pop())
    }
return FinalReverse;
}

function maxOfTwoNumbers (a,b)
{
  if(a>b)
    {return a}
  else
    {return b}
}

function maxOfThree (a,b,c)
{
  if(maxOfTwoNumbers(a,b)>c)
    {return maxOfTwoNumbers(a,b)}
  else
    {return c}
}

function isCharacterAVowel (input)
{
  if (input==="a" || input ==="e" || input === "i" || input ==="o" || input === "u")
    {
      return "True"
    }
  else
    {
      return "False"
    }
}

function sumArray(Input)
{
  var result = 0
  for (var x=0; x<Input.length; x++)
    {
      result += Input[x]
    }
  return result
}

function multiplyArray(Input)
{
   var result = 1
   for (var x=0; x<Input.length; x++)
    {
      result = Input[x]*result
    }
  return result
}

function shortQfive ()
{
  return arguments.length
}

function reverseString(alpha)
{
  var a=alpha.split("")
  var test =[]
  for (x=0; x=a.length; x++)
    {
      test.push(a.pop())
    }
  return test.join("")
}

function findLongestWord(i)
{
  var y=Lengths(i);
  var biggest =0
  for (x=0; x<i.length; x++)
  {
    if (maxOfTwoNumbers(y[x], y[x+1]) > biggest)
    {
      biggest = maxOfTwoNumbers(y[x], y[x+1])
    }
  }
  return biggest
}

function filterLongWords(arr,x)
{
  var newArr = []
  for (i=0; i<arr.length; i++)
    {
      if (arr[i].length>x)
        {
          newArr.push(arr[i])
        }
    }
  return newArr
}
