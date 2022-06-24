import { GildedRose } from '@/gilded-rose copy'

describe("Gilded Rose", () => {
  // Items
  //   Backstage passes to a TAFKAL80ETC concert
  // Sulfuras, Hand of Ragnaros
  // Aged Brie
  // Dexterity Vest +5

  enum TestItems {
    Egg = "Egg",
    AgedBrie = "Aged Brie",
    BackstagePasses = "Backstage passes to a TAFKAL80ETC concert",
    DexterityVest = "Dexterity Vest +5",
  }

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

  it("GivenAnEggWith0QualityShouldDecrementSellinAndQuality", () => {
    //Arrange
    const name = TestItems.Egg;
    const quality = 0;
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
});
