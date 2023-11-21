import * as graphql from "@nestjs/graphql";
import { DifferentEntityResolverBase } from "./base/differentEntity.resolver.base";
import { DifferentEntity } from "./base/DifferentEntity";
import { DifferentEntityService } from "./differentEntity.service";

@graphql.Resolver(() => DifferentEntity)
export class DifferentEntityResolver extends DifferentEntityResolverBase {
  constructor(protected readonly service: DifferentEntityService) {
    super(service);
  }
}
