describe("TextUtil", function () {

    it("Should trim text from both sides", function () {

        // given
        var text = "\t\r\n   .Some text,   \t\r\n";

        // when
        var trimmed = todo.utils.text.trim(text);

        // then
        expect(trimmed).toBe(".Some text,");
    });

});