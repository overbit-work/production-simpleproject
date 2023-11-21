import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DifferentEntityService } from "./differentEntity.service";
import { DifferentEntityControllerBase } from "./base/differentEntity.controller.base";

@swagger.ApiTags("differentEntities")
@common.Controller("differentEntities")
export class DifferentEntityController extends DifferentEntityControllerBase {
  constructor(
    protected readonly service: DifferentEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
