import { SyntheticEvent, useState } from 'react';

import { Button, Input, Loading, SearchTags } from '../../common';

import { Container, Content, TagsSelected, Left, Right, Upload as UploadStyles } from './styles';
import { api } from '../../services';

export default function Upload() {
  const [loadingFile, setLoadingFile] = useState<'empty' | 'loading' | 'have'>('empty');
  
  const [selected, setSelected] = useState([] as string[]);
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleUpload = async(evt: SyntheticEvent) => {
    evt.preventDefault();

    setLoading(true);

    const target = evt.target as typeof evt.target & {
      title: { value: string };
      description: { value: string };
    };


    if (!target.title.value && !target.description.value && !file) {
      return new Error('sasas')
    };

    const formData = new FormData();

    formData.append("name", target.title.value);
    formData.append("description", target.description.value);
    formData.append("tags", JSON.stringify(selected));
    formData.append("file", file as string);

    const { status } = await api.post('/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (status === 201) {
      target.title.value = '';
      target.description.value = '';

      setFile(null);
      setPreview(null);
      setSelected([]);
    setLoadingFile('empty');
  };

    setLoading(false);
  };

  const handleFileChange = (evt: any) => {
    const reader = new FileReader();
    const selectedFile = evt.target.files[0];

    setLoadingFile('loading')

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }

    reader.onload = (readerEvent: any) => setPreview(readerEvent.target.result)

    setTimeout(() => {
      setLoadingFile('have');
      setFile(selectedFile);
    }, 2000);
  };

  return (
    <Container>
      <Content onSubmit={handleUpload}>
        <Left>
          <UploadStyles>
            <Loading visible={loadingFile === 'loading'} />

            {loadingFile === 'empty' && (
              <label htmlFor="file">
                Choose a file
              </label>
            )}

            {loadingFile === 'have' && !!preview && (
              <video controls>
                <source src={preview}/>
              </video>
            )}

            <input id="file" type="file" name='file' onChange={handleFileChange} />
          </UploadStyles>
        </Left>

        <Right>
          <Input name='title' placeholder='name' />
          <span style={{ height: 10 }} />
          <Input name='description' placeholder='description' />
          <span style={{ height: 10 }} />

          <SearchTags setTags={setSelected} />
          {/* <TagsSelected>
            <p>Choose tags</p>
          </TagsSelected> */}
          <Button id="upload" type='submit'>{loading ? 'loading...' : 'Upload'}</Button>
        </Right>

      </Content>

      <Button id="posts" type='button' onClick={() => window.location.href = '/posts'}>Posts</Button>
    </Container>
  )
}