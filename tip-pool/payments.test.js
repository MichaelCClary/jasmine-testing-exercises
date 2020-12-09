describe("payments test (with setup and tear-down)", function () {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });

    it('submitPaymentInfo should add bill and tip info to allpayments', function () {
        submitPaymentInfo();

        expect(allPayments['payment1']['billAmt']).toEqual('100');
        expect(allPayments['payment1']['tipAmt']).toEqual('10');
        expect(allPayments['payment1']['tipPercent']).toEqual(10);
    });

    it('It should not work with empty payment', function () {
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('It should update curPayment', function () {
        thisPayment = { billAmt: "100", tipAmt: "10", tipPercent: 10 }

        expect(createCurPayment()).toEqual(thisPayment);
    });

    it('It shouldn not update CurPayment with empty field', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';

        expect(createCurPayment()).toEqual(undefined);
    });

    it('should update table with payment', function () {
        submitPaymentInfo();

        let currentTable = document.querySelectorAll('#paymentTable tbody tr td');

        expect(currentTable[0].innerText).toEqual('$100');
        expect(currentTable[1].innerText).toEqual('$10');
        expect(currentTable[2].innerText).toEqual('10%');
        expect(currentTable[3].innerText).toEqual('X');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});