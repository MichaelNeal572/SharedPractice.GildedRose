import { GildedRose, Item } from "@/gilded-rose-copy";
import { GildedRose as OldGildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  // Items
  //   Backstage passes to a TAFKAL80ETC concert
  // Sulfuras, Hand of Ragnaros
  // Aged Brie
  // Dexterity Vest +5

  enum TestItems {
    Egg = "Egg",
    Sulfuras = "Sulfuras, Hand of Ragnaros",
    AgedBrie = "Aged Brie",
    BackstagePasses = "Backstage passes to a TAFKAL80ETC concert",
    DexterityVest = "Dexterity Vest +5",
  }

  describe(`Item is: ${TestItems.AgedBrie}`, () => {
    it("GivenAnAgedBrieAndBackAndQuantityGreaterThen0ShouldDecreaseQuantityBy1", () => {
      //Arrange
      const name = TestItems.AgedBrie;
      const quality = 2;
      const sellIn = 0;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.AgedBrie,
          quality: 4,
          sellIn: -1,
        },
      ]);
    });

    it("GivenAnAgedBrieWithNegativeSellInAndBackAndQuantityGreaterThen0ShouldDecreaseQuantityBy1", () => {
      //Arrange
      const name = TestItems.AgedBrie;
      const quality = 2;
      const sellIn = -10;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.AgedBrie,
          quality: 4,
          sellIn: -11,
        },
      ]);
    });

    it("GivenAnAgedBrieAndQualityGreaterThen50", () => {
      //Arrange
      const name = TestItems.AgedBrie;
      const quality = 50;
      const sellIn = 0;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.AgedBrie,
          quality: 50,
          sellIn: -1,
        },
      ]);
    });

    it("GivenAnAgedBrieShouldDecrementSellinAndQuality", () => {
      //Arrange
      const name = TestItems.AgedBrie;
      const quality = 1;
      const sellIn = 0;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.AgedBrie,
          quality: 3,
          sellIn: -1,
        },
      ]);
    });
  });
  describe(`Item is: ${TestItems.BackstagePasses}`, () => {
    it("GivenAnConcertTicketAndBackAndQuantityGreaterThen50ShouldDecreaseQuantityBy1", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 50;
      const sellIn = 0;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 0,
          sellIn: -1,
        },
      ]);
    });

    it("GivenAnBackstagePassesShouldDecrementSellinAndQuality", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 1;
      const sellIn = 0;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 0,
          sellIn: -1,
        },
      ]);
    });

    it("GivenAnBackstageWithNegativeSellInPassesShouldDecrementSellinAndQuality", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 1;
      const sellIn = -10;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 0,
          sellIn: -11,
        },
      ]);
    });

    it("does something quality 49 sellin 10", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 49;
      const sellIn = 10;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 50,
          sellIn: 9,
        },
      ]);
    });
    it("does something quality 49 sellin 11", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 49;
      const sellIn = 11;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 50,
          sellIn: 10,
        },
      ]);
    });
    it("does something quality 49 sellin 6", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 49;
      const sellIn = 6;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 50,
          sellIn: 5,
        },
      ]);
    });
    it("does something quality 49 sellin 5", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 49;
      const sellIn = 5;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 50,
          sellIn: 4,
        },
      ]);
    });

    it("does something quality 50 sellin 10", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 50;
      const sellIn = 10;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 50,
          sellIn: 9,
        },
      ]);
    });
    it("does something quality 50 sellin 11", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 50;
      const sellIn = 11;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 50,
          sellIn: 10,
        },
      ]);
    });
    it("does something quality 50 sellin 6", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 50;
      const sellIn = 6;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 50,
          sellIn: 5,
        },
      ]);
    });
    it("does something quality 50 sellin 5", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 50;
      const sellIn = 5;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 50,
          sellIn: 4,
        },
      ]);
    });
  });

  describe(`Item is: ${TestItems.Sulfuras}`, () => {
    it("GivenSulfuraSellInShouldRemainTheSame", () => {
      //Arrange
      const name = TestItems.Sulfuras;
      const quality = 0;
      const sellIn = 10;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.Sulfuras,
          quality: 0,
          sellIn: 10,
        },
      ]);
    });
  });

  describe(`Item is: ${TestItems.Egg}`, () => {
    it("GivenAnEggShouldDecrementSellinAndQuality", () => {
      //Arrange
      const name = TestItems.Egg;
      const quality = 1;
      const sellIn = 0;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.Egg,
          quality: 0,
          sellIn: -1,
        },
      ]);
    });

    it("GivenAnEggWithSellIn1ShouldDecrementSellinAndQuality", () => {
      //Arrange
      const name = TestItems.Egg;
      const quality = 1;
      const sellIn = 1;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.Egg,
          quality: 0,
          sellIn: 0,
        },
      ]);
    });
    it("GivenAnBackstagePassWithSellInIsNegativeAndQualityOneShouldDecrementQualityByItSelf", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = 1;
      const sellIn = -1;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 0,
          sellIn: -2,
        },
      ]);
    });
    it("GivenAnBackstagePassWithSellInIsNegativeAndQualityNegativeShouldSetQualityToZero", () => {
      //Arrange
      const name = TestItems.BackstagePasses;
      const quality = -50;
      const sellIn = -1;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.BackstagePasses,
          quality: 0,
          sellIn: -2,
        },
      ]);
    });
    it("GivenAgeBrieAndSellInNegativeOneAndQualityLessThanFiftyShouldIncrementQualityByOne", () => {
      //Arrange
      const name = TestItems.AgedBrie;
      const quality = 49;
      const sellIn = -1;

      const items = [{ name, sellIn, quality }];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([
        {
          name: TestItems.AgedBrie,
          quality: 50,
          sellIn: -2,
        },
      ]);
    });
  });

  const acceptanceTestCases = [
    {
      input: new Item("+5 Dexterity Vest", 10, 20),
      expected: new Item("+5 Dexterity Vest", 9, 19),
    },
    {
      input: new Item("+5 Dexterity Vest", -2, 0),
      expected: new Item("+5 Dexterity Vest", -3, 0),
    },
    {
      input: new Item("+5 Dexterity Vest", -2, 1),
      expected: new Item("+5 Dexterity Vest", -3, 0),
    },
    {
      input: new Item("+5 Dexterity Vest", -2, 2),
      expected: new Item("+5 Dexterity Vest", -3, 0),
    },
    {
      input: new Item("+5 Dexterity Vest", -2, 3),
      expected: new Item("+5 Dexterity Vest", -3, 1),
    },
    {
      input: new Item("+5 Dexterity Vest", -2, 4),
      expected: new Item("+5 Dexterity Vest", -3, 2),
    },
    {
      input: new Item("Aged Brie", 2, 0),
      expected: new Item("Aged Brie", 1, 1),
    },
    {
      input: new Item("Elixir of the Mongoose", 5, 7),
      expected: new Item("Elixir of the Mongoose", 4, 6),
    },
    {
      input: new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      expected: new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    },
    {
      input: new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      expected: new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    },
    {
      input: new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      expected: new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
    },
    {
      input: new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      expected: new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
    },
    {
      input: new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      expected: new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
    },
    {
      input: new Item("Conjured Mana Cake", 3, 6),
      expected: new Item("Conjured Mana Cake", 2, 5),
    },
  ];
  for (const { input, expected } of acceptanceTestCases) {
    it(`Acceptance ${input.name} ${input.quality} ${input.sellIn}`, () => {
      //Arrange

      const items = [new Item(input.name, input.sellIn, input.quality)];

      const sut = new GildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([expected]);
    });
  }

  for (const { input, expected } of acceptanceTestCases) {
    it(`Old Acceptance ${input.name} ${input.quality} ${input.sellIn}`, () => {
      //Arrange

      const items = [new Item(input.name, input.sellIn, input.quality)];

      const sut = new OldGildedRose(items);
      //Act
      const result = sut.updateQuality();

      //Assert
      expect(result).toEqual([expected]);
    });
  }
});
