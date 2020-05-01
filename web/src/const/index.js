export const expression = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

export const categories = [
  {
    name: "Servicios",
    SubCategories: [
      {
        name: "salud",
      },
      {
        name: "abogado",
      },
      {
        name: "abogados",
      },
      {
        name: "programadores",
      },
      {
        name: "diseño web",
      },
      {
        name: "mantenimiento",
      },
      {
        name: "turismo",
      },
    ],
  },
  {
    name: "Cursos y Educacion",
    SubCategories: [
      {
        name: "arte, danza y música",
      },
      {
        name: "tecnicos e informáticos",
      },
      {
        name: "seminarios",
      },
      {
        name: "turismo",
      },
    ],
  },
  {
    name: "Musica, Moda y Arte",
    SubCategories: [
      {
        name: "música",
      },
      {
        name: "ropa",
      },
      {
        name: "moda",
      },
      {
        name: "arte",
      },
    ],
  },
];

export const permitedFormatFile = ["image/jpg", "image/jpeg", "image/png"];
