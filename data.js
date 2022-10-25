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
    image: "https://s6.uupload.ir/files/f1_36sj.jpg",
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
    image: "https://s6.uupload.ir/files/f2_q97p.jpg",
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
    image: "https://s6.uupload.ir/files/f3_hhjr.jpg",
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
    image: "https://s6.uupload.ir/files/f4_m8n8.jpg",
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
    image: "https://s6.uupload.ir/files/f5_upox.jpg",
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
    image: "https://s6.uupload.ir/files/f6_bbvy.jpg",
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
    image: "https://s6.uupload.ir/files/f7_6xn.jpg",
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
    image: "https://s6.uupload.ir/files/f8_f8e.jpg",
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
    image: "https://s6.uupload.ir/files/n1_7tt7.jpg",
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
    image: "https://s6.uupload.ir/files/n2_mlxp.jpg",
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
    image: "https://s6.uupload.ir/files/n3_j1vm.jpg",
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
    image: "https://s6.uupload.ir/files/n4_qr1w.jpg",
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
    image: "https://s6.uupload.ir/files/n5_1m0k.jpg",
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
    image: "https://s6.uupload.ir/files/n6_3rlp.jpg",
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
    image: "https://s6.uupload.ir/files/n7_lzzt.jpg",
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
