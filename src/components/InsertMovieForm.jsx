import React, { useContext, useState } from "react";
import { Button, Form, Input, Select, Space } from "antd";
import ContextMovies from "../context/ContextMovies";
const { TextArea } = Input;
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};



const InsertMovieForm = () => {
  const [form] = Form.useForm();

const { arrayOfMovies, setArrayOfMovies } = useContext(ContextMovies);

  const onFinish = (values) => {
    console.log(values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFill = () => {
    form.setFieldsValue({
      note: "Hello world!",
      gender: "male",
    });
  };

  const optionsGender = [
    "Acción",
    "Aventura",
    "Comedia",
    "Crimen",
    "Drama",
    "Fantasía",
    "Historia",
    "Terror",
    "Misterio",
    "Romance",
    "Ciencia ficción",
  ];

  const [titleValue, setTitleValue] = useState();
  const [descriptionValue, setDescriptionValue] = useState();
  const [rateValue, setRateValue] = useState();
  const [genderValue, setGenderValue] = useState();


  const handleNewmovie = ()=>{
    let newMovie = {
      title:titleValue,
      description:descriptionValue,
      rate:rateValue,
      gendet:genderValue
    }
    setArrayOfMovies(newMovie)
    console.log(arrayOfMovies)

  }

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        name="note"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Write your title movie" onChange={(event)=>setTitleValue(event.target.value)} autoFocus/>
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={(event)=>setGenderValue(event.target.value)}
          allowClear

        >
          {
            optionsGender.map((item,index)=>{
              return <Option key={index} value={item}>{item}</Option>
            })
          }
        </Select>
      </Form.Item>

      <Form.Item
        name="rate"
        label="Rate"
        rules={[
          {
            required: true,
            type: Number,
          },
        ]}
      >
        <Input min="0" type="number" onChange={(event)=>setRateValue(event.target.value)}/>
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea placeholder="Write your description" onChange={(event)=>setDescriptionValue(event.target.value)}/>
      </Form.Item>

      {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item> */}
    </Form>
  );
};
export default InsertMovieForm;
