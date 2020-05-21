/* Numbers */
console.log("_____Numbers_____\n")
console.log(13)
console.log(9.81)
console.log(2.998e8) // 2.998 * 10^8

/* Arithmetic */
console.log("_____Arithmetic_____\n")
console.log( 100 + 4 * 11)
console.log( (100 + 4) * 11)

/* Special Numbers */
console.log("_____Special Numbers_____\n")
console.log(Infinity)
console.log(NaN)

/* Strings */
console.log("_____Strings_____\n")
console.log(`This is a String with backtick`)
console.log("This is a String with double quotes")
console.log('This is a String with single quotes')
console.log('This is the first line. \nThis is the second line.')
console.log('This is the breakline element: \\n')
console.log(`con` + `ca` + `te` + `na` + `te`)
console.log(`[BackTick strings usually called Template Literals: \${}.\nThat allows us to put some code to be converted as a string after computed.]\n`)

/* Unary Operators */
console.log("_____Unary Operators_____\n")
console.log(`A unary operator takes only one value to do stuff, like "typeof": ${typeof 4.5}`)

/* Boolean Values */
console.log("_____Boolean Values_____Comparison\n")
console.log(3 > 2)
console.log(3 < 2)
console.log("Z" < "a") // Uppercase letters are always "less" than lowercase ones
console.log("Itchy" != "Scratchy")
console.log("Apple" == "Orange")
console.log(NaN == NaN) // NaN is not equal to itself

console.log("_____Boolean Values_____Logical Operators\n")
console.log(`&& - and, || - or , ! - not`)
console.log(true && false)
console.log(true && true)
console.log(true || false)
console.log(false || false)
console.log(!true)
console.log(!false)
console.log(1 + 1 == 2 && 10 *10 > 50)
console.log(`true ? 1 : 2 \n${true ? 1 : 2}`) //When it is true, it chooses the first
console.log(`false ? 1 : 2 \n${false ? 1 : 2}`) //When it is false, it chooses the second

/* Empty Values */
console.log("_____Empty Values_____\n")
console.log(null)
console.log(undefined)

/* Automatic Type Conversion */
console.log("_____Automatic Type Conversion_____\n")
console.log(`8 * null\n${8 * null}`) // Null becomes 0
console.log(`"5" - 1\n${"5" - 1}`) // "5" becomes a Number
console.log(`"5" + 1\n${"5" + 1}`) // 1 becomes "1"
console.log(`"five" * 2\n${"five" * 2}`) // "five" becomes NaN
console.log(`false == 0\n${false == 0}`)
console.log(null == undefined)
console.log(null == 0)
console.log(undefined == 0)
/* It is recommended to use the three character comparison operators defensively
to prevent unexpected type conversions. */
console.log(`false === 0\n${false === 0}`)
console.log(`false === ""\n${false === ""}`)

console.log("_____Automatic Type Conversion_____Short-circuiting of logical operators\n")
console.log(null || "user")
console.log("Agnes" || "user")
console.log(null && "user")
console.log("Agnes" && "user")

