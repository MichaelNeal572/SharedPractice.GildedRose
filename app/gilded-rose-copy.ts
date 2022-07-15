export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const agedBrie = "Aged Brie";
const backstagePassesToATAFKAL80ETCConcert =
  "Backstage passes to a TAFKAL80ETC concert";
const sulfurasHandOfRagnaros = "Sulfuras, Hand of Ragnaros";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name == sulfurasHandOfRagnaros) {
        continue;
      }

      item.sellIn = item.sellIn - 1;

      if (
        item.name != agedBrie &&
        item.name != backstagePassesToATAFKAL80ETCConcert
      ) {
        item.quality = item.quality - 1;
        if (item.sellIn < 0) {
          item.quality = item.quality - 1;
        }
      } else {
        item.quality = item.quality + 1;
      }

      if (item.name == backstagePassesToATAFKAL80ETCConcert) {
        if (item.sellIn < 11) {
          item.quality = item.quality + 1;
        }
        if (item.sellIn < 6) {
          item.quality = item.quality + 1;
        }
        if (item.sellIn < 0) {
          item.quality = item.quality - item.quality;
        }
      }
      
      if (item.name == agedBrie) {
        if (item.sellIn < 0) {
          item.quality = item.quality + 1;
        }
      }

      if (item.quality > 50) {
        item.quality = 50;
      }
      if (item.quality < 0) {
        item.quality = 0;
      }
    }

    return this.items;
  }
}
