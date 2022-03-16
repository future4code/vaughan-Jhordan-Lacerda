import react from "react";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import useForm from "../../hook/useForm";
import { FormContainer, InputContainer } from "./styled";
import axios from "axios";
import { useParams } from "react-router-dom";
import { createNewComment } from "../../services/comment";

const CommentForm = () => {
  const { form, onChange, cleanFields } = useForm({
    body: "",
  });
  const params = useParams();

  const onSubmit = (event) => {
    event.preventDefault();
    createNewComment(form, params);
    cleanFields();
  };
  return (
    <InputContainer>
      <FormContainer onSubmit={onSubmit}>
        <Stack spacing={1}>
          <FormControl isRequired>
            <InputGroup>
              <InputRightElement children={<InfoIcon />} />
              <Input
                placeholder="Digite o seu comentário"
                name={"body"}
                value={form.body}
                onChange={onChange}
                variant={"filled"}
                isFullWidth={true}
              />
            </InputGroup>
          </FormControl>
          <Button type="submit" colorScheme="teal" size="sm">
            Enviar Comentário
          </Button>
        </Stack>
      </FormContainer>
    </InputContainer>
  );
};

export default CommentForm;
