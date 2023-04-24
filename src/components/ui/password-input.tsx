import FormInput from "./input";
import { Icon, InputProps, useBoolean } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordInput({ ...props }: InputProps) {
  const [showPassword, { toggle }] = useBoolean();

  return (
    <FormInput
      type={showPassword ? `text` : `password`}
      placeholder="Password"
      size={`lg`}
      rightIcon={
        <Icon onClick={toggle} as={showPassword ? FaEyeSlash : FaEye} />
      }
      {...props}
    />
  );
}
