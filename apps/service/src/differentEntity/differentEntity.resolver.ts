import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DifferentEntityResolverBase } from "./base/differentEntity.resolver.base";
import { DifferentEntity } from "./base/DifferentEntity";
import { DifferentEntityService } from "./differentEntity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DifferentEntity)
export class DifferentEntityResolver extends DifferentEntityResolverBase {
  constructor(
    protected readonly service: DifferentEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
