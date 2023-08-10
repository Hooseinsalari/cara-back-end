import bcrypt from "bcryptjs";

export const products = [
  {
    name: "cartoon astronaut T-shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 120,
    offPrice: 120,
    discount: 0,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21307&authkey=%21ACFFO2RW2R6Hd6I&width=1100&height=1100",
  },
  {
    name: "astronaut T-shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 110,
    offPrice: 100,
    discount: 8,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21308&authkey=%21AK_M8hp8j5vPlD0&width=1100&height=1100",
  },
  {
    name: "cream astronaut T-shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 99,
    offPrice: 89,
    discount: 10,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21306&authkey=%21AKxNYFA4_tqZ3FE&width=1100&height=1100",
  },
  {
    name: "pink astronaut T-shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 260,
    offPrice: 220,
    discount: 15,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21309&authkey=%21ACzcUC1N9YOU2lE&width=1100&height=1100",
  },
  {
    name: "black astronaut T-shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 150,
    offPrice: 150,
    discount: 0,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21311&authkey=%21ACQcnFKghFVQR4o&width=1100&height=1100",
  },
  {
    name: "orange astronaut T-shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 220,
    offPrice: 200,
    discount: 13,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21310&authkey=%21AKGUW5v58Ck7Jys&width=1100&height=1100",
  },
  {
    name: "gray pants",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 220,
    offPrice: 100,
    discount: 20,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21312&authkey=%21AHMGpQIsjMoQLHs&width=1100&height=1100",
  },
  {
    name: "cartoon astronaut shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 35,
    offPrice: 5,
    discount: 20,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21314&authkey=%21AGR5Mn6JdEvpt6I&width=1100&height=1100",
  },
  {
    name: "blue astronaut shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 90,
    offPrice: 50,
    discount: 20,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21313&authkey=%21ALfA-QljMcsn2Fo&width=800&height=800",
  },
  {
    name: "gray astronaut shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 99,
    offPrice: 20,
    discount: 20,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21315&authkey=%21AF0Eql4rzmH8_-A&width=1200&height=1200",
  },
  {
    name: "white astronaut shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 220,
    offPrice: 100,
    discount: 20,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21316&authkey=%21ALaM4lmGqIwlUwQ&width=1200&height=1200",
  },
  {
    name: "gold astronaut shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 350,
    offPrice: 150,
    discount: 20,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21317&authkey=%21AJoW1SsbNQLGvJg&width=1200&height=1200",
  },
  {
    name: "blue astronaut shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 60,
    offPrice: 40,
    discount: 20,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21318&authkey=%21ACpunR5UmecFEuw&width=1200&height=1200",
  },
  {
    name: "gray astronaut pants",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 73,
    offPrice: 50,
    discount: 20,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21319&authkey=%21ANw3dbrhdLa4pgU&width=1200&height=1200",
  },
  {
    name: "brown astronaut shirt",
    brand: "adidas",
    description: `The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per
    sq . yd. fabric constructed from 100% cotton, this classic fit preshrunk
    jersey knit provides unmatched comfort with each wear. Featuring a
    taped neck and shoulder, and a seamless double-needle collar, and
    available in a range of colors, it offers it all in the ultimate head
    turning package.`,
    price: 120,
    offPrice: 60,
    discount: 20,
    image:
      "https://onedrive.live.com/embed?resid=507EBFA0A14CB978%21320&authkey=%21ACOnj3hmM2NSFj0&width=1200&height=1200",
  },
];

export const users = [
  {
    name: "hossein salari",
    email: "hossein.salari002@gmail.com",
    password: bcrypt.hashSync("09106754656123", 8),
    phoneNumber: "09106754656",
    isAdmin: true,
  },
  {
    name: "John",
    email: "user@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: false,
    phoneNumber: "09181230000",
  },
];
