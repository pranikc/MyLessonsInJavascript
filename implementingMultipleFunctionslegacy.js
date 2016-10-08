/**
 * Created by pranikchainani on 10/1/16.
 */
var list = [1, 3, 2, 3, 4, 5, 6, 7, 8, 10]

function totalValues(list)
{
    var sum = 0;
    for (var i = 0; i < list.length; i++)
    {
        sum = sum + list[i];
    }
    return sum;
}

function totalEvenValues(list)
{
    var sum = 0;
    for (var i = 0; i < list.length; i++)
    {
        if( list[i] % 2 == 0 )
            sum = sum + list[i];
    }
    return sum;
}

function totalOddValues(list)
{
    var sum = 0;
    for (var i = 0; i < list.length; i++)
    {
        if (list[i] %2 != 0)
            sum = sum + i;
    }
    return sum;
}

console.log(totalValues(list));
console.log(totalEvenValues(list));
console.log(totalOddValues(list));