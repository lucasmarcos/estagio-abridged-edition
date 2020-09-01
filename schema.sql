create table if not exists usuario (
    id integer primary key,
    nome text,
    cpf text,
    cidade text,
    bairro text,
    numero text,
    cep text,
    telefone text,
    email text,
    tipo text,
    verificado integer,
    senha text
);

create table if not exists tecnico (
    id integer primary key,
    ano_formatura integer,
    tipo_registro text,
    registro_profissional text
);

create table if not exists proprietario (
    id integer primary key,
    cnpj text
);

create table if not exists propriedade (
    id integer primary key,
    proprietario integer,
    nome text,
    longitute real,
    latitude real,
    data_inicio integer,
    data_proxima integer,
    foreign key (proprietario) references proprietario(id)
);

create table if not exists propriedade_tecnico (
    id integer primary key,
    propriedade integer,
    tecnico integer,
    foreign key (propriedade) references propriedade(id),
    foreign key (tecnico) references tecnico(id)
);

create table if not exists info_propriedade (
    id integer primary key,
    propriedade_tecnico integer,
    insercao integer,
    pessoas_envolvidas integer,
    area_total real,
    area_bovinucultura_leiteira real,
    area_pasto_perene real,
    area_lavoura_verao real,
    area_lavoura_inverno real,
    total_terra_arrenada real,
    preco_media_terra_nua real,
    valor_media_arrendamento real,
    mapa_uso_solo blob,
    foreign key (propriedade_tecnico) references propriedade_tecnico(id)
);

create table if not exists tipo_forragem (
    id integer primary key,
    nome text,
    tipo text
);

create table if not exists terra_forragem (
    id integer primary key,
    tipo_forragem integer,
    info_propriedade integer,
    data_formacao integer,
    area_ha real,
    tipo_terra text,
    custo_medio_formacao real,
    vida_util real,
    observacao text,
    foreign key (tipo_forragem) references tipo_forragem(id),
    foreign key (info_propriedade) references info_propriedade(id)
);

create table if not exists animal (
    id integer primary key,
    propriedade integer,
    identificacao text,
    sexo text,
    peso real,
    raca text,
    status text,
    foreign key (propriedade) references propriedade(id)
);

create table if not exists morte (
    id integer primary key,
    animal integer,
    data integer,
    causa text,
    foreign key (animal) references animal(id)
);

create table if not exists parto (
    id integer primary key,
    mae integer,
    bezerro integer,
    data integer,
    peso real,
    condicao text,
    foreign key (mae) references animal(id),
    foreign key (bezerro) references animal(id)
);

create table if not exists compra_animal (
    id integer primary key,
    animal integer,
    data integer,
    nascimento integer,
    peso real,
    valor real,
    foreign key (animal) references animal(id)
);

create table if not exists venda_animal (
    id integer primary key,
    animal integer,
    data integer,
    motivo text,
    valor real,
    destino text,
    foreign key (animal) references animal(id)
);

create table if not exists inseminacao (
    id integer primary key,
    touro integer,
    vaca integer,
    data integer,
    foreign key (touro) references animal(id),
    foreign key (vaca) references animal(id)
);

create table if not exists prenhez (
    id integer primary key,
    vaca integer,
    touro integer,
    inseminacao integer,
    tipo text,
    data_diagnostico integer,
    data_prenhez integer,
    foreign key (vaca) references animal(id),
    foreign key (touro) references animal(id)
);

create table if not exists mastite (
    id integer primary key,
    animal integer,
    data integer,
    tipo text,
    anterior_direita text,
    anterior_esquerda text,
    posterior_diretira text,
    posterior_esquerda text,
    foreign key (animal) references animal(id)
);

create table if not exists tratamento (
    id integer primary key,
    animal integer,
    medicamento integer,
    data integer,
    dose real,
    foreign key (animal) references animal(id),
    foreign key (medicamento) references medicamento(id)
);

create table if not exists medicamento (
    id integer primary key,
    principio_ativo text,
    nome text,
    forma_de_aplicacao text
);

create table if not exists doenca (
    id integer primary key,
    animal integer,
    data_diagnostico integer,
    diagnostico text,
    foreign key (animal) references animal(id)
);
