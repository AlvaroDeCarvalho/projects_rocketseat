import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { RegisterRestaurant } from '@/api/register-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signUpForm = z.object({
  restaurantName: z.string(),
  email: z.string().email(),
  managerName: z.string(),
  phone: z.string().min(11),
  password: z.string().min(6),
})

type signUpFormType = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpFormType>({ resolver: zodResolver(signUpForm) })

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: RegisterRestaurant,
  })

  const handelSignUp = async (data: signUpFormType) => {
    try {
      await registerRestaurantFn(data)

      toast.success('restaurante cadastrado com sucesso.', {
        action: {
          label: 'cadastrar outro',
          onClick: () => handelSignUp(data),
        },
      })
      navigate(`/sign-in?email=${data.email}`)
    } catch (error) {
      console.log(error)
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild variant={'ghost'} className="absolute right-4 top-8">
          <Link to={'/sign-in'}>Fazer login</Link>
        </Button>
        <div className="W-[320px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta gratis{' '}
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e começe suas vendas
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handelSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="email" {...register}>
                Seu e-mail
              </Label>
              <Input
                type="email"
                className="input"
                id="email"
                {...register('email')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="restaurantName" {...register}>
                Seu Restaurante
              </Label>
              <Input
                type="text"
                className="input"
                id="restaurantName"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName" {...register}>
                seu Nome
              </Label>
              <Input
                type="managerName"
                className="input"
                id="managerName"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" {...register}>
                Seu Telefone
              </Label>
              <Input
                type="tel"
                className="input"
                id="phone"
                {...register('phone')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" {...register}>
                Sua senha
              </Label>
              <Input
                type="password"
                className="input"
                id="password"
                {...register('password')}
              />
            </div>
            <div>
              <Button className="w-full" disabled={isSubmitting}>
                Finalizar cadastro
              </Button>
              <p className="loading-relaxed px-6 text-center text-sm text-muted-foreground">
                Ao continuar, vocè concorda com nossos <br />
                <a href="#" className="underline">
                  termos de serviço{' '}
                </a>{' '}
                e{' '}
                <a href="" className="underline">
                  politicas de privacidade
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
