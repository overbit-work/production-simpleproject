/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { SimpleEntityService } from "../simpleEntity.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SimpleEntityCreateInput } from "./SimpleEntityCreateInput";
import { SimpleEntityWhereInput } from "./SimpleEntityWhereInput";
import { SimpleEntityWhereUniqueInput } from "./SimpleEntityWhereUniqueInput";
import { SimpleEntityFindManyArgs } from "./SimpleEntityFindManyArgs";
import { SimpleEntityUpdateInput } from "./SimpleEntityUpdateInput";
import { SimpleEntity } from "./SimpleEntity";
import { DifferentEntityFindManyArgs } from "../../differentEntity/base/DifferentEntityFindManyArgs";
import { DifferentEntity } from "../../differentEntity/base/DifferentEntity";
import { DifferentEntityWhereUniqueInput } from "../../differentEntity/base/DifferentEntityWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SimpleEntityControllerBase {
  constructor(
    protected readonly service: SimpleEntityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SimpleEntity })
  @nestAccessControl.UseRoles({
    resource: "SimpleEntity",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: SimpleEntityCreateInput
  ): Promise<SimpleEntity> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SimpleEntity] })
  @ApiNestedQuery(SimpleEntityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SimpleEntity",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<SimpleEntity[]> {
    const args = plainToClass(SimpleEntityFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SimpleEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SimpleEntity",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SimpleEntityWhereUniqueInput
  ): Promise<SimpleEntity | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SimpleEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SimpleEntity",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SimpleEntityWhereUniqueInput,
    @common.Body() data: SimpleEntityUpdateInput
  ): Promise<SimpleEntity | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SimpleEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SimpleEntity",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SimpleEntityWhereUniqueInput
  ): Promise<SimpleEntity | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/differentEntities")
  @ApiNestedQuery(DifferentEntityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DifferentEntity",
    action: "read",
    possession: "any",
  })
  async findManyDifferentEntities(
    @common.Req() request: Request,
    @common.Param() params: SimpleEntityWhereUniqueInput
  ): Promise<DifferentEntity[]> {
    const query = plainToClass(DifferentEntityFindManyArgs, request.query);
    const results = await this.service.findDifferentEntities(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        productId: true,

        simpleEntity: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/differentEntities")
  @nestAccessControl.UseRoles({
    resource: "SimpleEntity",
    action: "update",
    possession: "any",
  })
  async connectDifferentEntities(
    @common.Param() params: SimpleEntityWhereUniqueInput,
    @common.Body() body: DifferentEntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      differentEntities: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/differentEntities")
  @nestAccessControl.UseRoles({
    resource: "SimpleEntity",
    action: "update",
    possession: "any",
  })
  async updateDifferentEntities(
    @common.Param() params: SimpleEntityWhereUniqueInput,
    @common.Body() body: DifferentEntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      differentEntities: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/differentEntities")
  @nestAccessControl.UseRoles({
    resource: "SimpleEntity",
    action: "update",
    possession: "any",
  })
  async disconnectDifferentEntities(
    @common.Param() params: SimpleEntityWhereUniqueInput,
    @common.Body() body: DifferentEntityWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      differentEntities: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}