import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SimpleEntityResolverBase } from "./base/simpleEntity.resolver.base";
import { SimpleEntity } from "./base/SimpleEntity";
import { SimpleEntityService } from "./simpleEntity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SimpleEntity)
export class SimpleEntityResolver extends SimpleEntityResolverBase {
  constructor(
    protected readonly service: SimpleEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
