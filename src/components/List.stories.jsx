import List from "./List";

export default {
  title: "Components/List",
  component: List,
  //tags: ["autodocs"],
};

export const Default = {
  args: {
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bruce_Willis_by_Gage_Skidmore_3.jpg/330px-Bruce_Willis_by_Gage_Skidmore_3.jpg",
    nombre: "Bruce Willis",
    esNota10: false,
    children:
      "Bruce Willis es un actor conocido por sus roles en películas de acción y ciencia ficción.",
  },
};

export const Destacado = {
  args: {
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Haley_Joel_Osment_TIFF_2014.jpg/500px-Haley_Joel_Osment_TIFF_2014.jpg",
    nombre: "Haley Joel Osment",
    esNota10: true,
    children:
      "Haley Joel Osment es un actor estadounidense conocido por su interpretación del niño que 've gente muerta' en 'El sexto sentido'.",
  },
};
