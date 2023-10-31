import { Dog, Bone, BatteryVerticalHigh, Leaf, TennisBall, Barbell } from "@phosphor-icons/react"
import Card from "../../../common/Card/Card"
import { AtividadesStyle } from "./atividades.style"

const BannerAtividades = () => {
  return (
    <AtividadesStyle>
      <div className="container-atividade">
        <h2>ATIVIDADES</h2>
        <div className="cards">
          <Card 
            icon={<Dog size={88} />}
            palavraChave={'348'}
            descricao={'Cachorros já treinados'} 
          />

          <Card 
            icon={<Bone size={88} />}
            palavraChave={'Petiscos'}
            descricao={'Petiscos naturais sem conservantes'}
          />

          <Card 
            icon={<TennisBall size={88} />}
            palavraChave={'Brincadeiras'}
            descricao={'Diversão enquanto aprende'}
          />

          <Card 
            icon={<Barbell size={88} />}
            palavraChave={'Treino Pesado'}
            descricao={'Muita brincadeira e corrida'}
          />

          <Card 
            icon={<BatteryVerticalHigh size={88} />}
            palavraChave={'Power-up'}
            descricao={'Momento para recarregar as energias'}
          />

          <Card 
            icon={<Leaf size={88} />}
            palavraChave={'Ar Livre'}
            descricao={'Ambiente ao ar livre'}
          />
        </div>
      </div>
    </AtividadesStyle>
  )
}

export default BannerAtividades
