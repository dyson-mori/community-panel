import { api } from "../../services";

const AddingNewtags = (formData: File) => new Promise(async(resolve, reject) => {
  const { data, status } = await api.post('/posts', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  if(status === 404){
    return reject(data);
  };

  return resolve(true);
});

export {
  AddingNewtags
}

export const ArrayTags = [
  {
    name: "#abg",
  },
  {
    name: "#archaical",
  },
  {
    name: "#asian",
  },
  {
    name: "#asian_ass",
  },
  {
    name: "#asian_big_ass",
  },
  {
    name: "#asian_big_boobs",
  },
  {
    name: "#asian_boobs",
  },
  {
    name: "#asian_teen",
  },
  {
    name: "#ass",
  },
  {
    name: "#azngoodgirl",
  },
  {
    name: "#big_ass",
  },
  {
    name: "#big_boobs",
  },
  {
    name: "#blowjob",
  },
  {
    name: "#boobs",
  },
  {
    name: "#car",
  },
  {
    name: "#college_asian",
  },
  {
    name: "#cosplay",
  },
  {
    name: "#cumshot",
  },
  {
    name: "#deepthroat",
  },
  {
    name: "#discord",
  },
  {
    name: "#fitness",
  },
  {
    name: "#glasses",
  },
  {
    name: "#jacknbecca",
  },
  {
    name: "#langerie",
  },
  {
    name: "#nacrevictoire",
  },
  {
    name: "#nerdy",
  },
  {
    name: "#onlyfans",
  },
  {
    name: "#pair",
  },
  {
    name: "#pov",
  },
  {
    name: "#public",
  },
  {
    name: "#red_hair",
  },
  {
    name: "#riding",
  },
  {
    name: "#riding_dick",
  },
  {
    name: "#slut",
  },
  {
    name: "#tattoo",
  },
  {
    name: "#teen",
  },
  {
    name: "#trio",
  },
  {
    name: "#unknown",
  },
  {
    name: "#whoahannahjo",
  },
  {
    name: "#cyberlycrush",
  },
  {
    name: "#huge_breasts",
  }
]