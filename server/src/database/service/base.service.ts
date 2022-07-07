import { Injectable } from '@nestjs/common';
import {
  CountOptions,
  FindOptions,
  Model,
  Transaction,
  WhereOptions,
} from 'sequelize';
import { Repository } from 'sequelize-typescript';

const humanizeTableName = (name: string) => name.toLowerCase;

@Injectable()
export abstract class BaseService<T extends Model, K> {
  protected abstract repository: Repository<T>;

  getHumanizedTableName = () => humanizeTableName(this.repository.tableName);

  NotFoundError = () =>
    (new Error(`${this.getHumanizedTableName} not found`) as unknown) as Error;
  public plainEntityGetter = <T>(entity: Model<T>) =>
    entity && ((entity.get({ plain: true }) as unknown) as K);

  public plainEntitiesGetter = <T>(entities: Array<Model<T>>) =>
    entities && entities.length
      ? ((entities.map(this.plainEntityGetter) as unknown) as K[])
      : [];

  public async add(entity: Partial<K>, transaction?: Transaction) {
    return this.repository
      .create(entity as any, { transaction })
      .then(this.plainEntityGetter);
  }

  public async addMultiple(entities: Partial<K>[], transaction?: Transaction) {
    return this.repository
      .bulkCreate(entities as any, { transaction })
      .then(this.plainEntitiesGetter);
  }

  public async getAllWhere(
    entitiesFilter: WhereOptions,
    transaction?: Transaction,
    findOptions?: FindOptions,
  ) {
    return this.repository
      .findAll({ where: entitiesFilter, transaction, ...findOptions })
      .then(this.plainEntitiesGetter);
  }

  public async getAll(transaction?: Transaction, findOptions?: FindOptions) {
    return this.repository
      .findAll({ transaction, ...findOptions })
      .then(this.plainEntitiesGetter);
  }

  public async get(
    id: number,
    transaction?: Transaction,
    findOptions?: FindOptions,
  ) {
    return this.repository
      .findByPk(id, {
        transaction,
        ...findOptions,
      })
      .then(this.plainEntityGetter);
  }

  public async getOneWhere(
    entitiesFilter: Partial<K> & WhereOptions,
    transaction?: Transaction,
    findOptions?: FindOptions,
  ) {
    return this.repository
      .findOne({
        where: entitiesFilter,
        transaction,
        ...findOptions,
      })
      .then(this.plainEntityGetter);
  }

  public async updateOne(
    entity: Partial<K>,
    transaction?: Transaction,
    findOptions?: FindOptions,
  ) {
    return this.repository
      .findByPk((entity as any).id, {
        rejectOnEmpty: this.NotFoundError(),
        transaction,
        ...findOptions,
      })
      .then(savedEntity => {
        return savedEntity
          .update(entity, { transaction })
          .then(this.plainEntityGetter);
      });
  }

  public async updateMultiple(
    entities: Partial<K>[],
    transaction?: Transaction,
  ) {
    return this.repository
      .bulkCreate(entities as any, {
        transaction,
      })
      .then(this.plainEntitiesGetter);
  }

  public async removeOne(id: number, transaction?: Transaction) {
    return this.repository
      .findByPk(id, {
        rejectOnEmpty: this.NotFoundError(),
        transaction,
      })
      .then(entityToDelete =>
        entityToDelete.destroy({ transaction }).then(() => true),
      );
  }

  public async alreadyExists(id: number, transaction?: Transaction) {
    return !!(await this.repository.findByPk(id, { transaction }));
  }

  public async alreadyExistsWhere(
    entity: WhereOptions,
    transaction?: Transaction,
  ) {
    return !!(await this.repository.findOne({
      where: entity,
      transaction,
    }));
  }

  public async getCountWhere(
    entitiesFilter: WhereOptions,
    transaction?: Transaction,
    countOptions?: CountOptions,
  ) {
    return this.repository.count({
      where: entitiesFilter,
      transaction,
      ...countOptions,
    });
  }

  public async removeWhere(
    transaction?: Transaction,
    findOptions?: FindOptions,
  ) {
    return this.repository
      .findAll({ transaction, ...findOptions })
      .then(entitiesToDelete =>
        entitiesToDelete.map(entity =>
          entity.destroy({ transaction }).then(() => true),
        ),
      );
  }

  public async bulkAdd(
    entitiesToAdd: Array<Partial<K>>,
    transaction?: Transaction,
  ) {
    return this.repository.bulkCreate(entitiesToAdd as any, {
      transaction,
    });
  }
}
