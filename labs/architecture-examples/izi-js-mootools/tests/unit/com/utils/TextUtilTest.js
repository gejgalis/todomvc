describe("TextUtil", function () {

    var util;

    beforeEach(function () {
        util = new com.utils.TextUtil();
    });

    it("Should trim text from both sides", function () {

        // given
        var text = "\t\r\n   .Some text,   \t\r\n";

        // when
        var trimmed = util.trim(text);

        // then
        expect(trimmed).toBe(".Some text,");
    });

});