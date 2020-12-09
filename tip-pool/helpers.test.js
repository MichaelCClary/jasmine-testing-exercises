describe("helpers test (with setup and tear-down)", function () {
    beforeEach(function () {
        // initialization logic
        allPayments = {
            payment1: { billAmt: "100", tipAmt: "10", tipPercent: 10 },
            payment2: { billAmt: "50", tipAmt: "20", tipPercent: 40 },
            payment3: { billAmt: "30", tipAmt: "5", tipPercent: 17 }
        }
    });

    it('sumPaymenttotal should take tipAmt, billAmt, tipPercent and sum all', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(180);
        expect(sumPaymentTotal('tipAmt')).toEqual(35);
        expect(sumPaymentTotal('tipPercent')).toEqual(67);
    });

    it('calculatetipPercent should take all types of tips', function () {
        expect(calculateTipPercent(100, 100)).toEqual(100);
        expect(calculateTipPercent(100, 0)).toEqual(0);
        expect(calculateTipPercent(100, 200)).toEqual(200);
        expect(calculateTipPercent(100, 20)).toEqual(20);
    });

    it('appendTd should take a tr and a value and add value in a td to the tr', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'nope');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerText).toEqual('nope');
    });


    it('appendDeleteBtn should add a TD with X in it', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerText).toEqual('X');
    });
    afterEach(function () {
        allPayments = {};
    });
});