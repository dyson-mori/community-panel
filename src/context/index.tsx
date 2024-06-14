import { createContext, useContext, SyntheticEvent, useState, useEffect } from 'react';

import { api } from '../services';

import { ContextProps, ProviderProps, TagsProps } from './type';

const Contexts = createContext({} as ContextProps);

export const Provider = ({ children }: ProviderProps) => {
  const [selected, setSelected] = useState([] as any[]);
  const [file, setFile] = useState('');

  const handleUpload = async(evt: SyntheticEvent) => {
    evt.preventDefault()
    const target = evt.target as typeof evt.target & {
      title: { value: string };
      description: { value: string };
    };

    const formData = new FormData();

    formData.append("name", target.title.value);
    formData.append("description", target.description.value);
    formData.append("tags", JSON.stringify(selected));
    formData.append("file", file);

    const { data, status } = await api.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log(data);
    console.log(status);
    

    // if (status === 201) {
    //   target.title.value = '';
    //   target.description.value = '';
    // }
  };

  const value = {
    handleUpload,
    setSelected,
    setFile
  };

  return (
    <Contexts.Provider value={value}>
      {children}
    </Contexts.Provider>
  )
};

export const useMainContext = () => {
  const context = useContext(Contexts);
  return context;
};