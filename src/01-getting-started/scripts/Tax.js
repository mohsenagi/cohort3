const CanadaTax = {
    
    function01(a01){
        var a02a04a06 = CanadaTax.function02(a01);
        var a03 = CanadaTax.function03(a01, a02a04a06[0]);
        var a05 = CanadaTax.function05(a03, a02a04a06[1]);
        var a07 = CanadaTax.function07(a05, a02a04a06[2]);
        var a08 = a07/a01;
        return [a02a04a06[0], a03, a02a04a06[1], a05, a02a04a06[2], a07, a08];
    },
    function02(a001){
        var a002 = 0
        var a004 = 0
        var a006 = 0
        if (a001 <= 47630) {a002 = 0; a004 = 0.15; a006 = 0};
        if (a001 > 47630 && a001 <= 95259) {a002 = 47630; a004 = 0.205; a006 = 7145};
        if (a001 > 95259 && a001 <= 147667) {a002 = 95259; a004 = 0.26; a006 = 16908};
        if (a001 > 147667 && a001 <= 210371) {a002 = 147667; a004 = 0.29; a006 = 30535};
        if (a001 > 210371) {a002 = 210371; a004 = 0.33; a006 = 48719};
        return [a002, a004, a006];
    },
    function03(a001, a002){
        var a003 = a001 - a002;
        return a003
    },
    function05(a003, a004){
        var a005 = a003 * a004;
        return a005
    },
    function07(a005, a006){
        var a007 = a005 + a006;
        return a007;
    },
}
export default CanadaTax;