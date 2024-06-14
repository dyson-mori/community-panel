import React, { useEffect, useState } from 'react';

import { Container, Drop } from './styles';

import { api } from '../../services';

import { InputSearch } from '../input';
import { Button } from '../button';

import { TagsProps } from '../../context/type';

type Props = {
  setTags: (a: Array<string>) => void;
}

export const SearchTags: React.FC<Props> = ({ setTags }) => {
  const [data, setData] = useState([] as TagsProps[]);

  const [search, setSearch] = useState<string>('');
  const [selected, setSelected] = useState([] as Array<any>);

  const handleSelect = (itemId: string) => {
    const find = selected.find(item => item === itemId);

    if (find) {
      const filter = selected.filter(item => item !== itemId);
      
      setTags(filter);
      return setSelected(filter);
    };

    setTags(prev => [...prev, itemId]);
    return setSelected(prev => [...prev, itemId]);
  };

  // const handleNewTags = async () => {
  //   const { data, status } = await api.post('/tags', {
  //     name: `#${search.replace(' ', '_')}`
  //   })
  //     .catch((error) => error.response)

  //     setData(prev => [...prev, data]);
  // };

  useEffect(() => {
    (async() => {
      const { data, status } = await api.get('/tags');

      if (status === 401) {
        return console.log('error');
      };

      const mapping = data.map((item: any) => ({ ...item, selected: false }))
      return setData(mapping);
    })();
  }, []);

  return (
    <Container>
      <InputSearch typeInput='clear' placeholder='Search' value={search} onText={setSearch} onClick={() => setSearch('')} />
      <span style={{ height: 10 }} />

      {search != '' && <Drop>
        {data.filter((item) => {
          return Object.values(item?.name).join('').toLowerCase().includes(search.toLowerCase())
        }).map((item, index) => (
          <Button
            isCreator={item.type === 'creator'}
            type='button'
            key={index}
            selected={selected.includes(item.id)}
            onClick={() => handleSelect(item.id)}>
              {item?.name.replace('#', '').replace('_', ' ').replace('_', ' ')}
            </Button>
        ))}
        {/* <Button type='button' onClick={handleNewTags}>add</Button> */}
      </Drop>}
    </Container>
  )
};
