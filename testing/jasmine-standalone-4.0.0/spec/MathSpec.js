describe("Math", function() {

    it("Sum should give the sum of 2 numbers", function() {

        // given:
        let a = 5
        let b = 10

        // when:
        let result = sum(a, b)

        // then:
        expect(result).toEqual(15)
      })

})