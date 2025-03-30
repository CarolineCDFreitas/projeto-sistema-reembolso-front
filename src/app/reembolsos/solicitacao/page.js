"use client";

import { FormStyled } from "../components/Form/FormStyled";
import BasicInfoForm from "../components/BasicInfoForm/BasicInfoForm";
import SpecificInfoForm from "../components/SpecificInfoForm/SpecificInfoForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Solicitacao() {
  return (
    <>
      <FormStyled action="">
        <BasicInfoForm />
        <SpecificInfoForm />
      </FormStyled>
    </>
  );
}
