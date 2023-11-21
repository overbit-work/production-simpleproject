/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateDifferentEntityArgs } from "./CreateDifferentEntityArgs";
import { UpdateDifferentEntityArgs } from "./UpdateDifferentEntityArgs";
import { DeleteDifferentEntityArgs } from "./DeleteDifferentEntityArgs";
import { DifferentEntityCountArgs } from "./DifferentEntityCountArgs";
import { DifferentEntityFindManyArgs } from "./DifferentEntityFindManyArgs";
import { DifferentEntityFindUniqueArgs } from "./DifferentEntityFindUniqueArgs";
import { DifferentEntity } from "./DifferentEntity";
import { SimpleEntity } from "../../simpleEntity/base/SimpleEntity";
import { DifferentEntityService } from "../differentEntity.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DifferentEntity)
export class DifferentEntityResolverBase {
  constructor(
    protected readonly service: DifferentEntityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DifferentEntity",
    action: "read",
    possession: "any",
  })
  async _differentEntitiesMeta(
    @graphql.Args() args: DifferentEntityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DifferentEntity])
  @nestAccessControl.UseRoles({
    resource: "DifferentEntity",
    action: "read",
    possession: "any",
  })
  async differentEntities(
    @graphql.Args() args: DifferentEntityFindManyArgs
  ): Promise<DifferentEntity[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DifferentEntity, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DifferentEntity",
    action: "read",
    possession: "own",
  })
  async differentEntity(
    @graphql.Args() args: DifferentEntityFindUniqueArgs
  ): Promise<DifferentEntity | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DifferentEntity)
  @nestAccessControl.UseRoles({
    resource: "DifferentEntity",
    action: "create",
    possession: "any",
  })
  async createDifferentEntity(
    @graphql.Args() args: CreateDifferentEntityArgs
  ): Promise<DifferentEntity> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        simpleEntity: args.data.simpleEntity
          ? {
              connect: args.data.simpleEntity,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DifferentEntity)
  @nestAccessControl.UseRoles({
    resource: "DifferentEntity",
    action: "update",
    possession: "any",
  })
  async updateDifferentEntity(
    @graphql.Args() args: UpdateDifferentEntityArgs
  ): Promise<DifferentEntity | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          simpleEntity: args.data.simpleEntity
            ? {
                connect: args.data.simpleEntity,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DifferentEntity)
  @nestAccessControl.UseRoles({
    resource: "DifferentEntity",
    action: "delete",
    possession: "any",
  })
  async deleteDifferentEntity(
    @graphql.Args() args: DeleteDifferentEntityArgs
  ): Promise<DifferentEntity | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SimpleEntity, {
    nullable: true,
    name: "simpleEntity",
  })
  @nestAccessControl.UseRoles({
    resource: "SimpleEntity",
    action: "read",
    possession: "any",
  })
  async resolveFieldSimpleEntity(
    @graphql.Parent() parent: DifferentEntity
  ): Promise<SimpleEntity | null> {
    const result = await this.service.getSimpleEntity(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
