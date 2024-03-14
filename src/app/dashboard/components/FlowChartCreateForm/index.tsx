'use client';
import { SubmitHandler, useForm } from 'react-hook-form';

import FormError from '@/components/FormErrorMessage';
import styles from './styles.module.css';

import Button from '@/components/Button';
import Input from '@/components/Input';

interface Inputs {
  flowChartName: string;
}

const FlowChartCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmitForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form}>
      {errors.flowChartName && <FormError error="Name is required" />}
      <Input
        placeholder="Flowchart name"
        autoComplete="off"
        register={register('flowChartName', { required: true })}
      />
      <Button
        type="submit"
        variant="ORANGE"
        onClick={handleSubmit(onSubmitForm)}
      >
        Create flowchart
      </Button>
    </form>
  );
};

export default FlowChartCreateForm;
