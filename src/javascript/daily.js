/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
function compare(a, b) {
    if (a === b) {
        return true
    }
    console.log("the two values are not the same")
    console.log(`p1 --> ${a}`)
    console.log(`p2 --> ${b}`)
    return false
};
export default compare;

// and before this comment ---

// assertEquals("a","b");
// assertEquals("a","a");
// assertEquals(1,2);
// assertEquals(2,2);
// assertEquals("2",2);
// assertEquals("This value","This value");