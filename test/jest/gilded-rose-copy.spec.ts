import { GildedRose, Item } from '@/gilded-rose copy'

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("does something with +5 Dexterity Vest", () => {
    // Arrange
    const item = new Item("+5 Dexterity Vest", 10, 20);
    const expectedItem = new Item("+5 Dexterity Vest", 9, 19);

    const gildedRose = new GildedRose([item]);
    //Act
    const items = gildedRose.updateQuality();
    //Assert
    expect(items).toEqual([expectedItem]);
  });

  it("does something with Elixir of the Mongoose", () => {
    // Arrange
    const item = new Item("Elixir of the Mongoose", 5, 7);
    const expectedItem = new Item("Elixir of the Mongoose", 4, 6);

    const gildedRose = new GildedRose([item]);
    //Act
    const items = gildedRose.updateQuality();
    //Assert
    expect(items).toEqual([expectedItem]);
  });

  it("does something with Backstage passes to a TAFKAL80ETC concert (15, 20)", () => {
    // Arrange
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);
    const expectedItem = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      14,
      21
    );

    const gildedRose = new GildedRose([item]);
    //Act
    const items = gildedRose.updateQuality();
    //Assert
    expect(items).toEqual([expectedItem]);
  });
  it("does something with Backstage passes to a TAFKAL80ETC concert (10, 49)", () => {
    // Arrange
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49);
    const expectedItem = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      9,
      50
    );

    const gildedRose = new GildedRose([item]);
    //Act
    const items = gildedRose.updateQuality();
    //Assert
    expect(items).toEqual([expectedItem]);
  });
  it("does something with Backstage passes to a TAFKAL80ETC concert (5, 49)", () => {
    // Arrange
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49);
    const expectedItem = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      4,
      50
    );

    const gildedRose = new GildedRose([item]);
    //Act
    const items = gildedRose.updateQuality();
    //Assert
    expect(items).toEqual([expectedItem]);
  });

  describe("Sulfuras, Hand of Ragnaros", () => {
    it("does something with Sulfuras, Hand of Ragnaros", () => {
      // Arrange
      const item = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
      const expectedItem = new Item("Sulfuras, Hand of Ragnaros", 0, 80);

      const gildedRose = new GildedRose([item]);
      //Act
      const items = gildedRose.updateQuality();
      //Assert
      expect(items).toEqual([item]);
    });
    it("does something with Sulfuras, Hand of Ragnaros", () => {
      // Arrange
      const item = new Item("Sulfuras, Hand of Ragnaros", -1, 80);
      const expectedItem = new Item("Sulfuras, Hand of Ragnaros", -1, 80);

      const gildedRose = new GildedRose([item]);
      //Act
      const items = gildedRose.updateQuality();
      //Assert
      expect(items).toEqual([expectedItem]);
    });
  });

  describe("Aged Brie", () => {
    it("does something with Aged Brie", () => {
      // Arrange
      const item = new Item("Aged Brie", 1, 80);
      const expectedItem = new Item("Aged Brie", 0, 80);

      const gildedRose = new GildedRose([item]);
      //Act
      const items = gildedRose.updateQuality();
      //Assert
      expect(items).toEqual([expectedItem]);
    });
    it("does something with Aged Brie", () => {
      // Arrange
      const item = new Item("Aged Brie", 0, 80);
      const expectedItem = new Item("Aged Brie", -1, 80);

      const gildedRose = new GildedRose([item]);
      //Act
      const items = gildedRose.updateQuality();
      //Assert
      expect(items).toEqual([expectedItem]);
    });
    it("does something with Aged Brie", () => {
      // Arrange
      const item = new Item("Aged Brie", -1, 80);
      const expectedItem = new Item("Aged Brie", -2, 80);

      const gildedRose = new GildedRose([item]);
      //Act
      const items = gildedRose.updateQuality();
      //Assert
      expect(items).toEqual([expectedItem]);
    });
  });

  describe("Unkown Item", () => {
    it("does something with Unkown Item", () => {
      // Arrange
      const item = new Item("Unkown Item", 1, 80);
      const expectedItem = new Item("Unkown Item", 0, 79);

      const gildedRose = new GildedRose([item]);
      //Act
      const items = gildedRose.updateQuality();
      //Assert
      expect(items).toEqual([expectedItem]);
    });
    it("does something with Unkown Item", () => {
      // Arrange
      const item = new Item("Unkown Item", 50, 80);
      const expectedItem = new Item("Unkown Item", 49, 79);

      const gildedRose = new GildedRose([item]);
      //Act
      const items = gildedRose.updateQuality();
      //Assert
      expect(items).toEqual([expectedItem]);
    });
    it("does something with Unkown Item", () => {
      // Arrange
      const item = new Item("Unkown Item", 0, 80);
      const expectedItem = new Item("Unkown Item", -1, 78);

      const gildedRose = new GildedRose([item]);
      //Act
      const items = gildedRose.updateQuality();
      //Assert
      expect(items).toEqual([expectedItem]);
    });
    it("does something with Unkown Item", () => {
      // Arrange
      const item = new Item("Unkown Item", -1, 80);
      const expectedItem = new Item("Unkown Item", -2, 78);

      const gildedRose = new GildedRose([item]);
      //Act
      const items = gildedRose.updateQuality();
      //Assert
      expect(items).toEqual([expectedItem]);
    });
  });
});
