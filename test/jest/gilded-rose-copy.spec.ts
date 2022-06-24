import { GildedRose } from '@/gilded-rose copy'

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
  
});
