import { InfoIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import react from "react";
import useForm from "../../hook/useForm";
import { submitNewPost } from "../../services/post";
import { FormContainer, InputContainer } from "./styled";

export const FeedForm = () => {
  const { form, onChange, cleanFields } = useForm({
    title: "",
    body: "",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    submitNewPost(form)
  };
  return (
    <InputContainer>
      <FormContainer onSubmit={onSubmit}>
        <Stack spacing={1}>
          <FormControl isRequired>
            <InputGroup>
              <InputRightElement children={<InfoIcon />} />
              <Input
                placeholder="Título do post"
                name={"title"}
                value={form.title}
                onChange={onChange}
                variant={"filled"}
                isFullWidth={true}
              />
            </InputGroup>
          </FormControl>
          <Textarea
            isRequired
            name={"body"}
            value={form.body}
            onChange={onChange}
            placeholder="Escreva seu post"
            size="sm"
            variant={"filled"}
          />
          <Button type="submit" colorScheme="teal" size="sm">
            Postar
          </Button>
        </Stack>
      </FormContainer>
    </InputContainer>
  );
};
